var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var gameModel = new( require( '../../../src/models/Games.js') ) ();
var deal2ReplaceService = new( require( "../../../src/services/dealServices/DealToReplace"))();
var suffledDeck = require( '../../testData/shuffledDeck');
var deepcopy = require( 'deepcopy' );

describe("Deal ToReplace Unit Tests", function(){
    describe("dealCards", function(){
        it("should return two replacement cards to one player for the position asked", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "5draw" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2ReplaceService.dealCards( gamePlayData, 2, [ "p0_c0", "p0_c1"] );
            // make sure each player gets the expected number in the expected position
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p0_c1");
            // make sure they are the expected cards
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 1 ].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[ 1 ].front.suit, "Clubs" );
            done();
        });
        it("should return three replacement cards for two players for the position asked", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "5draw" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2ReplaceService.dealCards( gamePlayData, 2, [ "p0_c0", "p0_c2", "p1_c1"] );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p0_c2");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p1_c1");
            // make sure they are the expected cards
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 1 ].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[ 1 ].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[ 2 ].front.cardFace, "Queen" );
            assert.equal( newCardsToBePlayed[ 2 ].front.suit, "Clubs" );
            done();
        });
        it("should return the same cards to each player regardless of input order", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "5draw" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2ReplaceService.dealCards( gamePlayData, 2, [ "p1_c1", "p0_c0", "p0_c2" ] );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p0_c2");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p1_c1");
            // make sure they are the expected cards
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 1 ].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[ 1 ].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[ 2 ].front.cardFace, "Queen" );
            assert.equal( newCardsToBePlayed[ 2 ].front.suit, "Clubs" );
            done();
        });
        it("should return an error if too many cards are asked for", function( done ){
            var deck = deepcopy( suffledDeck ).splice(1,3);
            var gameConfig = gameModel.getBy( "name", "5draw" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2ReplaceService.dealCards( gamePlayData, 2, ["p0_c0","p0_c1","p0_c2","p1_c0","p1_c1","p1_c2","p2_c1",] );
            assert.equal( newCardsToBePlayed.constructor.name, "Error");
            done();
        });
    });
});