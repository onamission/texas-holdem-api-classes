var express = require('express');
var router = express.Router();

var game_play_controller = require( '../controllers/gamePlayController' );

router.get('/', game_play_controller.set_game_play );
router.get('/:gameName', game_play_controller.set_game_play );
router.get('/:gameName/:numberOfPlayers', game_play_controller.set_game_play );
router.get('/:gameName/:numberOfPlayers/:deckCount', game_play_controller.set_game_play );

module.exports = router;
