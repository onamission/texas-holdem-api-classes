var DeckModel = require( "./Decks" );
var gamesModel = new ( require( "./Games") )();

class GamePlay{

    setUpGame( numberOfPlayers, gameName, deckCount, cardsInDeck, gameConfig ){
        if( !cardsInDeck.length ||  cardsInDeck.length === 0 ){
            cardsInDeck = new DeckModel( deckCount )
                .getNewDecks()
                .shuffleDeck()
                .cardsInDeck;
        }
        this.cardsInDeck = cardsInDeck;
        this.numberOfPlayers = numberOfPlayers || 5;
        this.gameConfig = Object.keys( gameConfig ).length > 0 ?
            gameConfig:
            gamesModel.getBy( "name", gameName ) || {};
        return this;
    }
}
module.exports = GamePlay;