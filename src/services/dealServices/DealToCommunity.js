var DealService = require( './DealService' );

class DealToCommunity extends DealService{
    /**
     * deals cards to the community hand
     *
     * @param {number} numberOfPlayers the number of players to deal to (not used in community)
     * @param {number} startCardPosition the total number of cards per hand
     * @param {number} cardsToDealThisRound the number of cards in this round
     * @param {string} howToDealThisRound "up" or "down"
     * @param {array} remainingDeck holds the remaining cards in the deck
     * @returns
     * @memberof DealToCommunity
     */
    dealCards( numberOfPlayers, startCardPosition, cardsToDealThisRound, howToDealThisRound, remainingDeck ){
        // ensure that we have enough cards for this round
        if( remainingDeck.length < cardsToDealThisRound + 1 ){
            return new Error( "Not enough cards in the deck" );
        }
        // burn a card
        var burnCard = remainingDeck.shift();
        // deal the card(s)
        var cardsForRound = [];
        for( var c = startCardPosition; c < ( cardsToDealThisRound + startCardPosition ); c++ ){
            var cardToDeal = remainingDeck.shift();
            var theDeal = {
                position: "comm_c" + c,
                front: {
                    order: cardToDeal.card.order,
                    cardFace: cardToDeal.card.name,
                    suit: cardToDeal.suit.name,
                    value: cardToDeal.card.value,
                    cardValue: cardToDeal.cardValue
                },
                back: {
                }
            }
            if( howToDealThisRound == "up" || p==0 ){
                theDeal.back.css = {transform: "rotateY(180deg)"};
            }else{
                theDeal.front.css = {transform: "rotateY(180deg)"};
            }
            cardsForRound.push( theDeal );
        }
        return cardsForRound;
    }
}
module.exports = DealToCommunity;