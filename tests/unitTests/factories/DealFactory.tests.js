var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var dealFactory = new( require( "../../../src/factories/DealFactory"))();

describe("Deal Factory Unit Tests", function(){
    describe("getDealServiceInstance", function(){
        it("should return an new instance of DealToCommunity if 'community' passed", function( done ){
            var instance = dealFactory.getDealServiceInstance( "community" );
            assert.equal( instance.constructor.name, "DealToCommunity" );
            done();
        });
        it("should return an new instance of DealToPlayer if 'players' passed", function( done ){
            var instance = dealFactory.getDealServiceInstance( "players" );
            assert.equal( instance.constructor.name, "DealToPlayers" );
            done();
        });
        it("should return an new instance of DealToReplace if 'replace' passed", function( done ){
            var instance = dealFactory.getDealServiceInstance( "replace" );
            assert.equal( instance.constructor.name, "DealToReplace" );
            done();
        });
        it("should return an Error if a non-factory type is passed", function( done ){
            var instance = dealFactory.getDealServiceInstance( "jibberish" );
            assert.equal( instance.constructor.name, "Error" );
            done();
        });
    });
});