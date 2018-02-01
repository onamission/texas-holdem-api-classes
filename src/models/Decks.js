var jsonCLient = new( require( "../clients/JsonData"))()

class Decks{

    /**
     * Creates an instance of Decks.
     * @param {any} numberOfDecks OPTIONAL. defaults to one
     * @memberof Decks
     */
    constructor( numberOfDecks){
        this.stackOfCards = [];
        this.numberOfDecks = numberOfDecks || 1;
    }

    /**
     * this gets a new deck of 52 cards
     *
     * @param {number} numberOfDecks OPTIONAL. can be set in the constructor as well the number of decks to fetch
     * @returns {array} of cards with face value and suit
     * @memberof Decks
     */
    getNewDecks( numberOfDecks ){
        this.numberOfDecks = numberOfDecks || this.numberOfDecks;
        var suits = jsonCLient.getDataFromFile( "suits" );
        var cards = jsonCLient.getDataFromFile( "cards" );
        var deck = [];
        for( var deckCount = 0; deckCount < this.numberOfDecks; deckCount++ ){
            Object.keys( suits ).forEach( suit => {
                Object.keys( cards ).forEach( card => {
                    deck.push( {
                        suit: suits[ suit ],
                        card: cards[ card ],
                        "cardValue": "<span style='color:" + suits[ suit ].color +
                            "' title=\"" + cards[ card ].name + " of " + suits[ suit ].name + "\"><b>" +
                            cards[ card ].value + " " + suits[ suit ].symbol + "</b></span>" } );
                })
            })
        }
        this.stackOfCards = deck;
        return this;
    }

    /**
     * gets a new deck(s) and shuffles it in a random order
     *
     * @param {array} cardsToShuffle the cards to shuffle together
     * @returns {array} of cards with face value and suit in random order
     * @memberof Decks
     */
    shuffleDecks(  ){
        var shuffledCards = [];
        // if we have no cards to shuffle, then return an empty array
        if( !this.stackOfCards || !this.stackOfCards.length ){
            return shuffledCards;
        }
        while( this.stackOfCards.length ){
            var randomCard = Math.floor( Math.random() * this.stackOfCards.length );
            var c = this.stackOfCards.splice( randomCard, 1 )[ 0 ];
            shuffledCards.push( c );
        }
        this.stackOfCards = shuffledCards;
        return this;
    }
}
module.exports = Decks;