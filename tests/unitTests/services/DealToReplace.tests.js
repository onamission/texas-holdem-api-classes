var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var deal2ReplaceService = new( require( "../../../src/services/dealServices/DealToReplace"))();
var dealData = require( '../../testData/handTestData');
var deepcopy = require( 'deepcopy' );

describe("Deal ToReplace Unit Tests", function(){
    describe("dealCards", function(){
        it("should return two replacement cards to one player for the position asked", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2ReplaceService.dealCards( 1, 0, 1, "up", data, [ "p0_c0", "p0_c1"] );
            // make sure each player gets the expected number in the expected position
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p0_c1");
            // make sure they are the expected cards
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Four" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 1 ].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[ 1 ].front.suit, "Hearts" );
            done();
        });
        it("should return three replacement cards for two players for the position asked", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2ReplaceService.dealCards( 2, 0, 5, "up", data, [ "p0_c0", "p0_c2", "p1_c1"] );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p0_c2");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p1_c1");
            // make sure they are the expected cards
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Four" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 1 ].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[ 1 ].front.suit, "Hearts" );
            assert.equal( newCardsToBePlayed[ 2 ].front.cardFace, "Five" );
            assert.equal( newCardsToBePlayed[ 2 ].front.suit, "Hearts" );
            done();
        });
        it("should return the same cards to each player regardless of input order", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2ReplaceService.dealCards( 2, 0, 5, "up", data, [ "p1_c1", "p0_c0", "p0_c2" ] );
            assert.equal( newCardsToBePlayed[ 0 ].position, "p0_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "p0_c2");
            assert.equal( newCardsToBePlayed[ 2 ].position, "p1_c1");
            // make sure they are the expected cards
            assert.equal( newCardsToBePlayed[ 0 ].front.cardFace, "Four" );
            assert.equal( newCardsToBePlayed[ 0 ].front.suit, "Spades" );
            assert.equal( newCardsToBePlayed[ 1 ].front.cardFace, "Three" );
            assert.equal( newCardsToBePlayed[ 1 ].front.suit, "Hearts" );
            assert.equal( newCardsToBePlayed[ 2 ].front.cardFace, "Five" );
            assert.equal( newCardsToBePlayed[ 2 ].front.suit, "Hearts" );
            done();
        });
        it("should return an error if too many cards are asked for", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2ReplaceService.dealCards( 3, 0, 13, "up", data );
            assert.equal( newCardsToBePlayed.constructor.name, "Error");
            done();
        });
    });
});