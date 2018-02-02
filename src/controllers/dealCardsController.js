var dealFactory = new ( require( '../factories/DealFactory') ) ();

exports.deal_round = function(req, res) {
    if( !req.query.cardsInDeck ){
        return new Error( "No cards in deck." );
    }
    if( !req.query.gameConfig ){
        return new Error( "No game configuration." );
    }
    if( !req.params.round ){
        return new Error( "I don't know the round to deal." );
    }
    var round = req.params.round;
    var numberOfPlayers = req.params.numberOfPlayers || 5;
    var cardsInDeck = JSON.parse( req.query.cardsInDeck );
    var gameConfig = JSON.parse( req.query.gameConfig );
    var roundToDeal = gameConfig.rounds[ round ] ;
    if( !roundToDeal || !roundToDeal.dealTo ){
        return new Error( "There is no round " + round + " for " + gameConfig.label );
    }
    var dealConfig = dealFactory.getDealServiceInstance( roundToDeal.dealTo );
    var cardsToDeal = dealConfig.dealCards( {cardsInDeck: cardsInDeck, gameConfig: gameConfig, "numberOfPlayers":numberOfPlayers }, round );
    console.log( "\n\n\nCARDS TO DEAL" ) ;
    console.log( JSON.stringify( cardsToDeal ) ) ;
    console.log( "\n\n\nCARDS IN DECK" ) ;
    console.log( JSON.stringify( cardsInDeck ) ) ;
    console.log( "\n\n\nGAME CONFIG" ) ;
    console.log( JSON.stringify( gameConfig ) ) ;
    console.log( "\n\n\nROUND" ) ;
    console.log( round ) ;
    console.log( "\n\n\n" ) ;
    res.send( JSON.stringify( cardsToDeal ) );
};
