var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var deal2CommunityService = new( require( "../../../src/services/dealServices/DealToCommunity"))();
var dealData = require( '../../testData/handTestData');
var deepcopy = require( 'deepcopy' );

describe("Deal To Community Unit Tests", function(){
    describe("dealCards", function(){
        it("should return a new card to community", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2CommunityService.dealCards( 5, 0, 1, "up", data );
            // make sure each player gets the expected number in the expected position
            assert.equal( newCardsToBePlayed[ 0 ].position, "comm_c0");
            // make sure it is the expected card
            assert.equal( newCardsToBePlayed[0].front.cardFace, "Four" );
            assert.equal( newCardsToBePlayed[0].front.suit, "Spades" );
            done();
        });
        it("should return two new card to two players", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2CommunityService.dealCards( 2, 0, 5, "up", data );
            assert.equal( newCardsToBePlayed[ 0 ].position, "comm_c0");
            assert.equal( newCardsToBePlayed[ 1 ].position, "comm_c1");
            assert.equal( newCardsToBePlayed[ 2 ].position, "comm_c2");
            assert.equal( newCardsToBePlayed[ 3 ].position, "comm_c3");
            assert.equal( newCardsToBePlayed[ 4 ].position, "comm_c4");
            done();
        });
        it("should return an error if too many cards are asked for", function( done ){
            var data = deepcopy( dealData.handStraight );
            var newCardsToBePlayed = deal2CommunityService.dealCards( 3, 0, 13, "up", data );
            assert.equal( newCardsToBePlayed.constructor.name, "Error");
            done();
        });
    });
});