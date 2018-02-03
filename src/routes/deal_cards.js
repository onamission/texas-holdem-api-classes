const express = require('express');
const router = express.Router();

var deal_cards_controller = require( '../controllers/dealCardsController' );

router.get('/', deal_cards_controller.deal_round );
router.get('/:round', deal_cards_controller.deal_round );
router.get('/:round/:numberOfPlayers', deal_cards_controller.deal_round );

module.exports = router;
