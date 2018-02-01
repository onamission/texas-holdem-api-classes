var DealService = require( './DealService' );

class DealToReplace extends DealService{

    /**
     * deals cards to the community hand
     *
     * @param {object} gamePlay metadata describing the rules of the game
     * @param {number} roundToPlay which round needs to be dealt
     * @returns {array} of cards with postion at the table
     * @memberof DealToCommunity
     */
    dealCards( gamePlay, roundToPlay, cardsToReplace ){
        // get the round structure from the data
        var roundConfig = gamePlay.gameConfig.rounds[ roundToPlay ];

        // ensure that we have enough cards for this round
        if( gamePlay.cardsInDeck.length < roundConfig.cardsToDeal + 1 ){
            return new Error( "Not enough cards in the deck" );
        }

        // burn a card
        var burnCard =  gamePlay.cardsInDeck.shift();

        // deal the card(s) -- all cards to each player in order
        var cardsForRound = [];
        for( var p = 0; p < gamePlay.numberOfPlayers; p++ ){
            var thisPlayersDiscard = cardsToReplace.filter( position => position.indexOf( "p" + p ) === 0 );
            if( thisPlayersDiscard.length ) {
                thisPlayersDiscard.forEach( c => {
                    var cardToDeal =  gamePlay.cardsInDeck.shift();
                    var theDeal = {
                        position: c,
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
                    // deal it up if requested or if it is your hand otherwise down
                    if( roundConfig.cardDirection == "up" || p == 0 ){
                        theDeal.back.css = {transform: "rotateY(180deg)"};
                    }else{
                        theDeal.front.css = {transform: "rotateY(180deg)"};
                    };
                    cardsForRound.push( theDeal );
                });
            }
        }
        return cardsForRound;
    }
}
module.exports = DealToReplace;