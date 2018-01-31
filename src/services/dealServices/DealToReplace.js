var DealService = require( './DealService' );

class DealToReplace extends DealService{
    /**
     * deals cards to the community hand
     *
     * @param {number} numberOfPlayers the number of players to deal to
     * @param {number} startCardPosition the total number of cards per hand (ignored in this method)
     * @param {number} cardsToDealThisRound the number of cards in this round (ignored in this method)
     * @param {string} howToDealThisRound "up" or "down"
     * @param {array} remainingDeck holds the remaining cards in the deck
     * @param {array} cardsToReplace holds the positions of the cards requesting to be replaced
     * @returns
     * @memberof DealToCommunity
     */
    dealCards( numberOfPlayers, startCardPosition, cardsToDealThisRound, howToDealThisRound, remainingDeck, cardsToReplace ){
        if( !cardsToReplace || !cardsToReplace.length ){
            return new Error( "No cards to replace input." );
        }
        // ensure that we have enough cards for this round
        if( remainingDeck.length < cardsToReplace.length + 1 ){
            return new Error( "Not enough cards in the deck" );
        }
        // burn a card
        var burnCard = remainingDeck.shift();
        // deal the card(s) -- all cards to each player in order
        var cardsForRound = [];
        for( var p = 0; p < numberOfPlayers; p++ ){
            var thisPlayersDiscard = cardsToReplace.filter( position => position.indexOf( "p" + p ) === 0 );
            if( thisPlayersDiscard.length ) {
                thisPlayersDiscard.forEach( c => {
                    var cardToDeal = remainingDeck.shift();
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
                    if( howToDealThisRound == "up" || p == 0 ){
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