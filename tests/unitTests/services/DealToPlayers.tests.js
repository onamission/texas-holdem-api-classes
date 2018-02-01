var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var gameModel = new( require( '../../../src/models/Games.js') ) ();
var deal2PlayersService = new( require( "../../../src/services/dealServices/DealToPlayers"))();
var suffledDeck = require( '../../testData/shuffledDeck');
var deepcopy = require( 'deepcopy' );

describe("Deal To Players Unit Tests", function(){
    describe("dealCards", function(){
        it("should return \"the hole\" -- two cards to each player", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "tex" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2PlayersService.dealCards( gamePlayData, 1 );
            assert.equal( newCardsToBePlayed.length, 10);
            // make sure it is the expected card and in the right position
            assert.equal( newCardsToBePlayed[0].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[0].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[1].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[1].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[2].front.cardFace, "Queen" );
            assert.equal( newCardsToBePlayed[2].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p1_c0");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p2_c0");
            assert.equal( newCardsToBePlayed[ 3 ].position, "p3_c0");
            assert.equal( newCardsToBePlayed[ 4 ].position, "p4_c0");
            assert.equal( newCardsToBePlayed[ 5 ].position, "p0_c1");
            assert.equal( newCardsToBePlayed[ 6 ].position, "p1_c1");
            assert.equal( newCardsToBePlayed[ 7 ].position, "p2_c1");
            assert.equal( newCardsToBePlayed[ 8 ].position, "p3_c1");
            assert.equal( newCardsToBePlayed[ 9 ].position, "p4_c1");
            done();
        });

        it("should return five cards to each player", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "5card" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2PlayersService.dealCards( gamePlayData, 1 );
            assert.equal( newCardsToBePlayed.length, 15);
            // make sure it is the expected card and in the right position
            assert.equal( newCardsToBePlayed[0].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[0].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[1].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[1].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[2].front.cardFace, "Queen" );
            assert.equal( newCardsToBePlayed[2].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p1_c0");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p2_c0");
            assert.equal( newCardsToBePlayed[ 3 ].position, "p3_c0");
            assert.equal( newCardsToBePlayed[ 4 ].position, "p4_c0");
            assert.equal( newCardsToBePlayed[ 10 ].position, "p0_c2");
            assert.equal( newCardsToBePlayed[ 11 ].position, "p1_c2");
            assert.equal( newCardsToBePlayed[ 12 ].position, "p2_c2");
            assert.equal( newCardsToBePlayed[ 13 ].position, "p3_c2");
            assert.equal( newCardsToBePlayed[ 14 ].position, "p4_c2");
            done();
        });
        it("should return two cards to each player", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "7stud" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2PlayersService.dealCards( gamePlayData, 1 );
            assert.equal( newCardsToBePlayed.length, 10);
            // make sure it is the expected card and in the right position
            assert.equal( newCardsToBePlayed[0].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[0].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[1].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[1].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[2].front.cardFace, "Queen" );
            assert.equal( newCardsToBePlayed[2].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p1_c0");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p2_c0");
            assert.equal( newCardsToBePlayed[ 3 ].position, "p3_c0");
            assert.equal( newCardsToBePlayed[ 4 ].position, "p4_c0");
            assert.equal( newCardsToBePlayed[ 5 ].position, "p0_c1");
            assert.equal( newCardsToBePlayed[ 6 ].position, "p1_c1");
            assert.equal( newCardsToBePlayed[ 7 ].position, "p2_c1");
            assert.equal( newCardsToBePlayed[ 8 ].position, "p3_c1");
            assert.equal( newCardsToBePlayed[ 9 ].position, "p4_c1");
            done();
        });
        it("should return an error if too many cards are asked for", function( done ){
            var deck = deepcopy( suffledDeck ).slice(1, 3 );
            var gameConfig = gameModel.getBy( "name", "5card" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 25,
                deckCount : 1,
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2PlayersService.dealCards( gamePlayData, 1 );
            assert.equal( newCardsToBePlayed.constructor.name, "Error");
            done();
        });
    });
});