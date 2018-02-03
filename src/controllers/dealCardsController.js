var dealFactory = new (require('../factories/DealFactory'))();

exports.deal_round = function (req, res) {
    if (!req.query.cardsInDeck) {
        res.status(500).send({status:500, message: 'No cards in deck.', type:'internal'});
    }
    if ( !req.query.gameConfig ){
        res.status(500).send({status:500, message: 'No game configuration.', type:'internal'});
        return new Error( "" );
    }
    if ( !req.params.round ){
        res.status(500).send({status:500, message: "I don't know the round to deal.", type:'internal'});
    }
    var round = req.params.round;
    var numberOfPlayers = req.params.numberOfPlayers || 5;
    var cardsInDeck = JSON.parse( req.query.cardsInDeck );
    var gameConfig = JSON.parse( req.query.gameConfig );
    var roundToDeal = gameConfig.rounds[ round ] ;
    if ( !roundToDeal || !roundToDeal.dealTo ){
        res.status(500).send({status:500, message: "There is no round " + round + " for " + gameConfig.label, type:'internal'});
    }
    var dealConfig = dealFactory.getDealServiceInstance( roundToDeal.dealTo );
    var cardsToDeal = dealConfig.dealCards( {cardsInDeck: cardsInDeck, gameConfig: gameConfig, "numberOfPlayers":numberOfPlayers }, round );

    res.send( JSON.stringify( cardsToDeal ) );
};
