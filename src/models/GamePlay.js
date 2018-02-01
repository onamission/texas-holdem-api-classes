var DeckModel = require( "./Decks" );
var gamesModel = new ( require( "./Games") )();

class GamePlay{

    constructor( numPlayers, deckCount ){
        this.cardsInDeck = [];
        this.numberOfPlayers = numPlayers || 5;
        this.deckCount = deckCount || 1;
        this.gameConfig = {};
    }

    getGameConfig( gameName, numberOfPlayers ){
        this.cardsInDeck = new( DeckModel )( this.deckCount ).getNewDecks().shuffleDecks();
        this.numberOfPlayers = numberOfPlayers || this.numberOfPlayers;
        this.gameConfig = gamesModel.find( game => game.name === gameName );
        return this;
    }
}
module.exports = GamePlay;