var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var cardsModel = new( require( "../../../src/models/Cards"))();

describe("BaseModel Unit Tests (using CardsModel)", function(){
    describe("getters tests", function(){
        it("should return a card object from a key ", function(done){
            var res = cardsModel.get( "2" );
            assert.equal( JSON.stringify( res ),  JSON.stringify({ order: "d", value: "2", name: "Two"} ) );
            done();
        });
        it("should return an order from a key ", function(done){
            var res = cardsModel.get( "2", "order" );
            assert.equal( res, "d" );
            done();
        });
        it("should return an value from a key ", function(done){
            var res = cardsModel.get( "2", "value" );
            assert.equal( res, "2" );
            done();
        });
        it("should return a name from a key ", function(done){
            var res = cardsModel.get( "2", "name" );
            assert.equal( res, "Two" );
            done();
        });
        it("should return the entire data object if no key provided ", function(done){
            var res = cardsModel.get( );
            assert.equal( Object.keys( res).length, 13 );
            done();
        });
    });

    describe("getBy tests", function(){
        it("should return a card object from a order ", function(done){
            var res = cardsModel.getBy( "order", "d" );
            assert.equal( JSON.stringify( res ), JSON.stringify({ "order":"d","value" : "2","name": "Two"} ) );
            done();
        });
        it("should return an value from a order ", function(done){
            var res = cardsModel.getBy( "order", "d", "value" );
            assert.equal( res, "2" );
            done();
        });
        it("should return an name from a order ", function(done){
            var res = cardsModel.getBy( "order", "d", "name" );
            assert.equal( res, "Two" );
            done();
        });

        it("should return a card object from a value ", function(done){
            var res = cardsModel.getBy( "value", "2" );
            assert.equal( JSON.stringify( res ), JSON.stringify({ "order":"d","value" : "2","name": "Two"} ) );
            done();
        });
        it("should return an order from a value ", function(done){
            var res = cardsModel.getBy( "value", "2", "order" );
            assert.equal( res, "d" );
            done();
        });
        it("should return an name from a value ", function(done){
            var res = cardsModel.getBy( "value", "2", "name" );
            assert.equal( res, "Two" );
            done();
        });

        it("should return a card object from a name ", function(done){
            var res = cardsModel.getBy( "name", "Two" );
            assert.equal( JSON.stringify( res ), JSON.stringify({ "order":"d","value" : "2","name": "Two"} ) );
            done();
        });
        it("should return an order from a name ", function(done){
            var res = cardsModel.getBy( "name", "Two", "order" );
            assert.equal( res, "d" );
            done();
        });
        it("should return an value from a name ", function(done){
            var res = cardsModel.getBy( "name", "Two", "value" );
            assert.equal( res, "2" );
            done();
        })
        it("should return an error message if no keyField provided ", function(done){
            var res = cardsModel.getBy( );
            assert.equal( res.message, 'No Key Field Provided' );
            done();
        });
        it("should return a card object if no keyValue provided ", function(done){
            var res = cardsModel.getBy( "name" );
            assert.equal(  JSON.stringify( res.Two ), JSON.stringify({ "order":"d","value" : "2","name": "Two"} ) );
            done();
        });
    });

    describe("string sorter tests", function(){
        it("should return a card object sorted by name ascending ", function(done){
            var res = cardsModel.sortBy( "name" );
            assert.equal( JSON.stringify( res[ Object.keys(res)[ 0 ] ] ),  JSON.stringify({ order: "1", value: "A", name: "Ace"} ) );
            done();
        });
        it("should return a card object sorted by name descending ", function(done){
            var res = cardsModel.sortBy( "name", "desc" );
            assert.equal( JSON.stringify( res[ Object.keys(res)[ 0 ] ] ),  JSON.stringify({ order: "d", value: "2", name: "Two"} ) );
            done();
        });
        it("should return a card object sorted by order ascending ", function(done){
            var res = cardsModel.sortBy( "order" );
            assert.equal( JSON.stringify( res[ Object.keys(res)[ 0 ] ] ),  JSON.stringify({ order: "1", value: "A", name: "Ace"} ) );
            done();
        });
        it("should return an error message if no key provided ", function(done){
            var res = cardsModel.sortBy( );
            assert.equal( res.message, 'No Key Field Provided' );
            done();
        });
        it("should return an error message if key provided is not part of object", function(done){
            var res = cardsModel.sortBy( "blah" );
            assert.equal( res.message, 'Key Field Provided "blah" is not part of cards' );
            done();
        });
    });
});

