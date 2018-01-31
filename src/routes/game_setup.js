var express = require('express');
var router = express.Router();

var gameboard_controller = require( '../controllers/gameboardController' );

router.get('/:gameName/players/:playerCount', gameboard_controller.setup_game_board );
router.get('/', gameboard_controller.setup_game_board );

module.exports = router;
