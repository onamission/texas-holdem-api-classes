var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var agent = require( 'superagent' );
var config = new( require( '../../../src/services/configurationServices'))().getConfig();
var shuffledDeck = require( '../../testData/shuffledDeck');
var gameModel = new( require( '../../../src/models/Games'))

describe("Deal Cards Route Tests", function(){
    describe("deal a hand", function(){
        it.only("should deal two cards to 5 players for Texas Hold 'em", function( done ){
            var cardsInDeck = shuffledDeck;
            var gameConfig = gameModel.getBy( "name", "tex");
            agent.get( config.appUrl + '/deal_cards/1/5')
            .query( { "cardsInDeck": JSON.stringify( cardsInDeck )} )
            .query( { "gameConfig": JSON.stringify( gameConfig ) } )
            .then( res =>{
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.length , 10 );
                assert.equal( responseJson[0].position , "p0_c0" );
                assert.equal( responseJson[1].position , "p1_c0" );
                assert.equal( responseJson[2].position , "p2_c0" );
                assert.equal( responseJson[3].position , "p3_c0" );
                assert.equal( responseJson[4].position , "p4_c0" );
                assert.equal( responseJson[5].position , "p0_c1" );
                assert.equal( responseJson[6].position , "p1_c1" );
                assert.equal( responseJson[7].position , "p2_c1" );
                assert.equal( responseJson[8].position , "p3_c1" );
                assert.equal( responseJson[9].position , "p4_c1" );
                done();
            })
            .catch( err =>{
                done( err );
            })
        });
        it.only("should deal 5 cards to 4 players for 5 Card Draw", function( done ){
            var cardsInDeck = shuffledDeck;
            var gameConfig = gameModel.getBy( "name", "5draw");
            agent.get( config.appUrl + '/deal_cards/1/4')
            .query( { "cardsInDeck": JSON.stringify( cardsInDeck )} )
            .query( { "gameConfig": JSON.stringify( gameConfig ) } )
            .then( res =>{
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.length , 20 );
                assert.equal( responseJson[0].position , "p0_c0" );
                assert.equal( responseJson[1].position , "p1_c0" );
                assert.equal( responseJson[2].position , "p2_c0" );
                assert.equal( responseJson[3].position , "p3_c0" );
                assert.equal( responseJson[4].position , "p0_c1" );
                assert.equal( responseJson[5].position , "p1_c1" );
                assert.equal( responseJson[6].position , "p2_c1" );
                assert.equal( responseJson[7].position , "p3_c1" );
                assert.equal( responseJson[8].position , "p0_c2" );
                assert.equal( responseJson[9].position , "p1_c2" );
                assert.equal( responseJson[10].position , "p2_c2" );
                assert.equal( responseJson[11].position , "p3_c2" );
                assert.equal( responseJson[12].position , "p0_c3" );
                assert.equal( responseJson[13].position , "p1_c3" );
                assert.equal( responseJson[14].position , "p2_c3" );
                assert.equal( responseJson[15].position , "p3_c3" );
                assert.equal( responseJson[16].position , "p0_c4" );
                assert.equal( responseJson[17].position , "p1_c4" );
                assert.equal( responseJson[18].position , "p2_c4" );
                assert.equal( responseJson[19].position , "p3_c4" );
                done();
            })
            .catch( err =>{
                done( err );
            })
        });
        it.only("should deal 3 cards to the Community (flop) for Texas Hold 'em", function( done ){
            var cardsInDeck = shuffledDeck;
            var gameConfig = gameModel.getBy( "name", "tex");
            agent.get( config.appUrl + '/deal_cards/2')
            .query( { "cardsInDeck": JSON.stringify( cardsInDeck )} )
            .query( { "gameConfig": JSON.stringify( gameConfig ) } )
            .then( res =>{
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.length , 3 );
                assert.equal( responseJson[0].position , "comm_c0" );
                assert.equal( responseJson[1].position , "comm_c1" );
                assert.equal( responseJson[2].position , "comm_c2" );
                done();
            })
            .catch( err =>{
                done( err );
            })
        });
        it.only("should deal 1 card to the Community (turn) for Texas Hold 'em", function( done ){
            var cardsInDeck = shuffledDeck;
            var gameConfig = gameModel.getBy( "name", "tex");
            agent.get( config.appUrl + '/deal_cards/3')
            .query( { "cardsInDeck": JSON.stringify( cardsInDeck )} )
            .query( { "gameConfig": JSON.stringify( gameConfig ) } )
            .then( res =>{
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.length , 1 );
                assert.equal( responseJson[0].position , "comm_c3" );
                done();
            })
            .catch( err =>{
                done( err );
            })
        });
        it.only("should deal 1 card to the Community (river) for Texas Hold 'em", function( done ){
            var cardsInDeck = shuffledDeck;
            var gameConfig = gameModel.getBy( "name", "tex");
            agent.get( config.appUrl + '/deal_cards/4')
            .query( { "cardsInDeck": JSON.stringify( cardsInDeck )} )
            .query( { "gameConfig": JSON.stringify( gameConfig ) } )
            .then( res =>{
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.length , 1 );
                assert.equal( responseJson[0].position , "comm_c4" );
                done();
            })
            .catch( err =>{
                done( err );
            })
        });
    });
})