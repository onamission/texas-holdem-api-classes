var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var agent = require( 'superagent' );
var config = new( require( '../../../src/services/configurationServices'))().getConfig();
//var gameSetupRoute = new( require( "../../../src/routes/game_setup"))();

describe("JsonData Unit Tests", function(){
    describe("get Data", function(){
        it("should return cards from the cards.json file which is an object of key/object pairss", function( done ){
            agent.get( config.appUrl + '/game_setup/5card/players/5', function( err, res ){
                if( err ){
                    console.log( err );
                    done( err );
                }
                assert.equal( res.status, 200 );
                assert.equal( ( res.text.length > 3400 ) , true );
                done();
            })
        });
    });
});