var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var deal2CommunityService = new( require( "../../../src/services/dealServices/DealToCommunity"))();
var gameModel = new(require( '../../../src/models/Games' ))();
var dealData = require( '../../testData/handTestData');
var suffledDeck = require ('../../testData/shuffledDeck');
var deepcopy = require( 'deepcopy' );

describe("Deal To Community Unit Tests", function(){
    describe("dealCards", function(){
        it("should return \"the flop\" -- three new cards to community", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "tex" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameName : 'tex',
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2CommunityService.dealCards( gamePlayData, 2 );
            assert.equal( newCardsToBePlayed.length, 3);
            // make sure it is the expected card and in the right position
            assert.equal( newCardsToBePlayed[0].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[0].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[1].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[1].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[2].front.cardFace, "Queen" );
            assert.equal( newCardsToBePlayed[2].front.suit, "Clubs" );
            assert.equal( newCardsToBePlayed[ 0 ].position, "comm_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "comm_c1");
            assert.equal( newCardsToBePlayed[ 2 ].position, "comm_c2");
            done();
        });
        it("should return \"the turn\" -- one new card to community", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "tex" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameName : 'tex',
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2CommunityService.dealCards( gamePlayData, 3 );
            assert.equal( newCardsToBePlayed.length, 1);
            // make sure it is the expected card and in the right position
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 0 ].position, "comm_c3");
            done();
        });
        it("should return \"the river\" -- one new card to community", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "tex" );
            var gamePlayData = {
                cardsInDeck : deck,
                numberOfPlayers : 5,
                deckCount : 1,
                gameName : 'tex',
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2CommunityService.dealCards( gamePlayData, 4 );
            assert.equal( newCardsToBePlayed.length, 1);
            // make sure it is the expected card and in the right position
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Two" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 0 ].position, "comm_c4");
            done();
        });
        it("should return an error if too many cards are asked for", function( done ){
            var deck = deepcopy( suffledDeck );
            var gameConfig = gameModel.getBy( "name", "tex" );
            var gamePlayData = {
                cardsInDeck : deck.slice(1,3),
                numberOfPlayers : 50,
                deckCount : 1,
                gameName : 'tex',
                gameConfig : gameConfig
            }
            var newCardsToBePlayed = deal2CommunityService.dealCards( gamePlayData, 1 );
            assert.equal( newCardsToBePlayed.constructor.name, "Error");
            done();
        });
    });
});