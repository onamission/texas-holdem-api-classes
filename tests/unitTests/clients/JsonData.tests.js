var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var jsonDataClient = new( require( "../../../src/clients/JsonData"))();

describe("JsonData Unit Tests", function(){
    describe("get Data", function(){
        it("should return cards from the cards.json file which is an object of key/object pairss", function( done ){
            var res = jsonDataClient.getDataFromFile( "cards" );
            assert.equal( Object.keys( res ).length, 13 );
            assert.equal( res[ 1 ].name, "Ace" );
            done();
        });
        it("should return cards from the matches.json file which is an object of key/string pairs", function( done ){
            var res = jsonDataClient.getDataFromFile( "matches" );
            assert.equal( Object.keys( res ).length, 6 );
            assert.equal( res[ 1 ], "HighCard" );
            done();
        });
        it("should return cards from the playerNames.json file which is an array of strings", function( done ){
            var res = jsonDataClient.getDataFromFile( "playersNames" );
            assert.equal( res.length, 2000 );
            assert.equal( res[ 1 ], "Liam" );
            done();
        });
    });
});

