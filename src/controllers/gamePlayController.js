var gamePlayModel = new( require( '../models/GamePlay') ) ();

exports.set_game_play = function(req, res) {
    var gameName = req.params.gameName || 'tex';
    var numberOfPlayers = req.params.numberOfPlayers || 5;
    var deckCount = req.params.deckCount || 1;
    var cardsInDeck = req.query.cardsInDeck ? JSON.parse( req.query.cardsInDeck ): [];
    var gameConfig = req.query.gameConfig ?  JSON.parse( req.query.gameConfig ): {};
    var newGameConfig =  gamePlayModel.setUpGame ( numberOfPlayers, gameName, deckCount, cardsInDeck, gameConfig );

    res.send( JSON.stringify( newGameConfig ) );
};
