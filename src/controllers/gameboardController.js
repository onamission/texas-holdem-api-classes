var gamesInstance = new( require('../models/Games'))();
var gameBoardService = new( require( '../services/setupServices/GameBoard'))();

// Display the Gameboard.
exports.setup_game_board = function(req, res) {
    var gameName = req.params.gameName;
    var playerCount = req.params.playerCount;
    var game = gamesInstance.getBy( "name", gameName );
    var gameboard = gameBoardService.playerArea( playerCount, game.numCards );
    if( game.communityCards ){
        gameboard += gameBoardService.communityCards( game.communityCards );
    }
    res.send( gameboard );
};
