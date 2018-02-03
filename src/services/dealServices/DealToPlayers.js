var DealService = require( './DealService' );

class DealToPlayers extends DealService{

    /**
     * deals cards to the community hand
     *
     * @param {object} gamePlay metadata describing the rules of the game
     * @param {number} roundToPlay which round needs to be dealt
     * @returns {array} of cards with postion at the table
     * @memberof DealToCommunity
     */
    dealCards( gamePlay, roundToPlay ){
        // get the round structure from the data
        var roundConfig = gamePlay.gameConfig.rounds[ roundToPlay ];

        // ensure that we have enough cards for this round
        if( gamePlay.cardsInDeck.length < ( roundConfig.cardsToDeal * gamePlay.numberOfPlayers ) + 1 ){
            return new Error( "Not enough cards in the deck" );
        }

        // burn the top card card
        var burnCard = gamePlay.cardsInDeck.shift();

        // deal the card(s)
        var cardsForRound = [];
        for( var c = roundConfig.startPosition; c < ( roundConfig.cardsToDeal + roundConfig.startPosition ); c++ ){
            for( var p = 0; p < gamePlay.numberOfPlayers; p++){
                // get the top card
                var cardToDeal = gamePlay.cardsInDeck.shift();
                var theDeal = {
                    position: "p" + p +"_c" + c,
                    front: {
                        order: cardToDeal.card.order,
                        cardFace: cardToDeal.card.name,
                        suit: cardToDeal.suit.name,
                        value: cardToDeal.card.value,
                        cardValue: cardToDeal.cardValue
                    },
                    back: {
                    }
                };
                if( roundConfig.cardDirection == "up" ){
                    theDeal.back.css = {transform: "rotateY(180deg)"};
                }else{
                    theDeal.front.css = {transform: "rotateY(180deg)"};
                }
                cardsForRound.push( theDeal );
            }
        }
        return cardsForRound;
    }
}
module.exports = DealToPlayers;