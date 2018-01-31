var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var scoringService = new( require( "../../../src/services/scoringServices/ScoringService"))();
var scoringData = require( '../../testData/handTestData');

describe("Scoring Helper Unit Tests (using CardsModel)", function(){
    describe("getSetsAndFlushes tests", function(){
        it("should return set of arrays to determine pairs, three of a kind, etc", function(done){
            var hand =scoringData.handThreeTwos;
            var handScore = scoringService.getSetsAndFlushes( hand, "0" );
            assert.equal( handScore.sets["d"].length, 3 );
            assert.equal( handScore.flushes["Hearts"].length, 3 );
            assert.equal( handScore.flushes["Clubs"].length, 1 );
            assert.equal( handScore.sets["a"].length, 1 );
            done();
        });
        it("should return set of arrays to determine flushes", function(done){
            var hand =scoringData.handHeartsFlush;
            var handScore = scoringService.getSetsAndFlushes( hand, "0" );
            assert.equal( handScore.sets["d"].length, 2 );
            assert.equal( handScore.flushes["Hearts"].length, 5 );
            assert.equal( handScore.flushes["Spades"].length, 1 );
            assert.equal( handScore.sets["a"].length, 1 );
            done();
        });
        it("should return set of arrays to determine straights", function(done){
            var hand =scoringData.handStraight;
            var handScore = scoringService.getSetsAndFlushes( hand, "0" );
            assert.equal( handScore.sets["1"].length, 1 );
            assert.equal( handScore.sets["d"].length, 1 );
            assert.equal( handScore.sets["c"].length, 1 );
            assert.equal( handScore.sets["b"].length, 1 );
            assert.equal( handScore.sets["a"].length, 1 );
            done();
        });
    });
});