var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var deal2PlayersService = new( require( "../../../src/services/dealServices/DealToPlayers"))();
var dealData = require( '../../testData/handTestData');
var deepcopy = require( 'deepcopy' );

describe("Deal To Players Unit Tests", function(){
    describe("dealCards", function(){
        it("should return a new card to five players", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2PlayersService.dealCards(5, 0, 1, "up", data );
            // make sure each player gets the expected number in the expected position
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p1_c0");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p2_c0");
            assert.equal( newCardsToBePlayed[ 3 ].position, "p3_c0");
            assert.equal( newCardsToBePlayed[ 4 ].position, "p4_c0");
            // make sure they are the expected cards
            assert.equal( newCardsToBePlayed[0].front.cardFace, "Four" );
            assert.equal( newCardsToBePlayed[0].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[1].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[1].front.suit,"Hearts" );
            assert.equal( newCardsToBePlayed[2].front.cardFace, "Five" );
            assert.equal( newCardsToBePlayed[2].front.suit, "Hearts" );
            assert.equal( newCardsToBePlayed[3].front.cardFace, "Jack");
            assert.equal( newCardsToBePlayed[3].front.suit, "Hearts" );
            assert.equal( newCardsToBePlayed[4].front.cardFace, "Ace" );
            assert.equal( newCardsToBePlayed[4].front.suit, "Hearts" );
            done();
        });
        it("should return two new card to two players", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2PlayersService.dealCards(2, 0, 2, "up", data );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p1_c0");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p0_c1");
            assert.equal( newCardsToBePlayed[ 3 ].position, "p1_c1");
            done();
        });
        it("should return an error if too many cards are asked for", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2PlayersService.dealCards(3, 0, 3, "up", data );
            assert.equal( newCardsToBePlayed.constructor.name, "Error");
            done();
        });
    });
});