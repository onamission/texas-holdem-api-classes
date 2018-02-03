var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var agent = require( 'superagent' );
var config = new( require( '../../../src/services/configurationServices'))().getConfig();
var shuffledDeck = require( '../../testData/shuffledDeck');

describe("Game Setup Route Tests", function(){
    describe("setup new game", function(){
        it("should return a configuration object for a texas holdem game with 5 players", function( done ){
            agent.get( config.appUrl + '/game_play/tex/', function( err, res ){
                if( err ){
                    done( err );
                }
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.cardsInDeck.length , 52 );
                assert.equal( responseJson.numberOfPlayers , 5 );
                assert.equal( responseJson.gameConfig.label , "Texas Hold 'em" );
                assert.equal( responseJson.gameConfig.numCards, 7);
                assert.equal( responseJson.gameConfig.communityCards,5);
                assert.equal( responseJson.gameConfig.playerCards,2);
                assert.equal( Object.keys( responseJson.gameConfig.rounds).length, 4 );
                done();
            });
        });
        it("should return a configuration object for a texas holdem game with 3 players", function( done ){
            agent.get( config.appUrl + '/game_play/tex/3', function( err, res ){
                if( err ){
                    done( err );
                }
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.cardsInDeck.length , 52 );
                assert.equal( responseJson.numberOfPlayers , 3 );
                assert.equal( responseJson.gameConfig.label , "Texas Hold 'em" );
                assert.equal( responseJson.gameConfig.numCards, 7);
                assert.equal( responseJson.gameConfig.communityCards,5);
                assert.equal( responseJson.gameConfig.playerCards,2);
                assert.equal( Object.keys( responseJson.gameConfig.rounds).length, 4 );
                done();
            });
        });
        it("should return a configuration object for a texas holdem game with 3 players and 2 decks", function( done ){
            agent.get( config.appUrl + '/game_play/tex/3/2', function( err, res ){
                if( err ){
                    done( err );
                }
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.cardsInDeck.length , 104 );
                assert.equal( responseJson.numberOfPlayers , 3 );
                assert.equal( responseJson.gameConfig.label , "Texas Hold 'em" );
                assert.equal( responseJson.gameConfig.numCards, 7);
                assert.equal( responseJson.gameConfig.communityCards,5);
                assert.equal( responseJson.gameConfig.playerCards,2);
                assert.equal( Object.keys( responseJson.gameConfig.rounds).length, 4 );
                done();
            });
        });
        it("should return a configuration object for a 5 card draw game with 5 players", function( done ){
            agent.get( config.appUrl + '/game_play/5draw/', function( err, res ){
                if( err ){
                    done( err );
                }
                var responseJson = JSON.parse( res.text );
                assert.equal( res.status, 200 );
                assert.equal( responseJson.cardsInDeck.length , 52 );
                assert.equal( responseJson.numberOfPlayers , 5 );
                assert.equal( responseJson.gameConfig.label , "5 Card Draw" );
                assert.equal( responseJson.gameConfig.numCards, 5);
                assert.equal( responseJson.gameConfig.communityCards,0);
                assert.equal( responseJson.gameConfig.playerCards,5);
                assert.equal( Object.keys( responseJson.gameConfig.rounds).length, 2 );
                done();
            });
        });
    });
    describe("continue a started game game", function(){
        it("should return a configuration object for a texas holdem game with 5 players", function( done ){
            var cards = shuffledDeck.splice( 10, 20 );
            var gameCnfg = { "label": "test game", "numCards": 12, "communityCards": 12, "rounds":{ "1": 1, "2": 2, "3":3, "4":4, "5":5, "6":6} };
            var url = config.appUrl + '/game_play/tex/2/1/';
            agent.get( url )
                .query( { "cardsInDeck" : JSON.stringify( cards ) } )
                .query( { "gameConfig" : JSON.stringify( gameCnfg ) }  )
                .then (res =>{
                    var responseJson = JSON.parse( res.text );
                    assert.equal( res.status, 200 );
                    assert.equal( responseJson.cardsInDeck.length , 20 );
                    assert.equal( responseJson.numberOfPlayers , 2 );
                    assert.equal( responseJson.gameConfig.label , "test game" );
                    assert.equal( responseJson.gameConfig.numCards, 12);
                    assert.equal( responseJson.gameConfig.communityCards,12);
                    assert.equal( Object.keys( responseJson.gameConfig.rounds).length, 6 );
                    done();
                })
                .catch( err => {
                    done( err ) ;
                });
        });
    });
});