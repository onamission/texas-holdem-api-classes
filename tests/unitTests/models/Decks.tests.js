var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var DecksModel = require( "../../../src/models/Decks");

describe("Deck Unit Tests", function(){
    describe("getNewDecks", function(){
        it("should return a 52 card object -- 13 in each suit and 4 Aces -- default from the constructor", function(done){
            var deck = new ( DecksModel )().getNewDecks( ).stackOfCards;
            assert.equal( deck.length, 52 );
            var clubs = deck.filter( cards => cards.suit.name === "Clubs");
            assert.equal( clubs.length, 13);
            var spades = deck.filter( cards => cards.suit.name === "Spades");
            assert.equal( clubs.length, 13);
            var diamonds = deck.filter( cards => cards.suit.name === "Diamonds");
            assert.equal( clubs.length, 13);
            var hearts = deck.filter( cards => cards.suit.name === "Hearts");
            assert.equal( clubs.length, 13);
            var aces = deck.filter( cards => cards.card.value === "A");
            assert.equal( aces.length, 4);
            done();
        });
        it("should return a 52 card object -- 13 in each suit and 4 Aces called from the constructor", function(done){
            var deck =  new ( DecksModel )(1).getNewDecks( ).stackOfCards;
            assert.equal( deck.length, 52 );
            var clubs = deck.filter( cards => cards.suit.name === "Clubs");
            assert.equal( clubs.length, 13);
            var spades = deck.filter( cards => cards.suit.name === "Spades");
            assert.equal( clubs.length, 13);
            var diamonds = deck.filter( cards => cards.suit.name === "Diamonds");
            assert.equal( clubs.length, 13);
            var hearts = deck.filter( cards => cards.suit.name === "Hearts");
            assert.equal( clubs.length, 13);
            var aces = deck.filter( cards => cards.card.value === "A");
            assert.equal( aces.length, 4);
            done();
        });
        it("should return a 52 card object -- 13 in each suit and 4 Aces called from the function", function(done){
            var deck =  new ( DecksModel )().getNewDecks( 1 ).stackOfCards;
            assert.equal( deck.length, 52 );
            var clubs = deck.filter( cards => cards.suit.name === "Clubs");
            assert.equal( clubs.length, 13);
            var spades = deck.filter( cards => cards.suit.name === "Spades");
            assert.equal( clubs.length, 13);
            var diamonds = deck.filter( cards => cards.suit.name === "Diamonds");
            assert.equal( clubs.length, 13);
            var hearts = deck.filter( cards => cards.suit.name === "Hearts");
            assert.equal( clubs.length, 13);
            var aces = deck.filter( cards => cards.card.value === "A");
            assert.equal( aces.length, 4);
            done();
        });
        it("should return a 104 card object if 2 decks requested  -- 26 in each suit and 8 Aces", function(done){
            var deck =  new ( DecksModel )().getNewDecks( 2 ).stackOfCards;
            assert.equal( deck.length, 104 );
            var clubs = deck.filter( cards => cards.suit.name === "Clubs");
            assert.equal( clubs.length, 26);
            var spades = deck.filter( cards => cards.suit.name === "Spades");
            assert.equal( clubs.length, 26);
            var diamonds = deck.filter( cards => cards.suit.name === "Diamonds");
            assert.equal( clubs.length, 26);
            var hearts = deck.filter( cards => cards.suit.name === "Hearts");
            assert.equal( clubs.length, 26);
            var aces = deck.filter( cards => cards.card.value === "A");
            assert.equal( aces.length, 8);
            done();
        });
    });
    describe("shuffleDecks", function(){
        it("should return a 52 card object -- 13 in each suit and 4 Aces", function(done){
            var deck =  new ( DecksModel )().getNewDecks( 1 ).shuffleDecks( deck ).stackOfCards;
            assert.equal( deck.length, 52 );
            var clubs = deck.filter( cards => cards.suit.name === "Clubs");
            assert.equal( clubs.length, 13);
            var spades = deck.filter( cards => cards.suit.name === "Spades");
            assert.equal( spades.length, 13);
            var diamonds = deck.filter( cards => cards.suit.name === "Diamonds");
            assert.equal( diamonds.length, 13);
            var hearts = deck.filter( cards => cards.suit.name === "Hearts");
            assert.equal( hearts.length, 13);
            var aces = deck.filter( cards => cards.card.value === "A");
            assert.equal( aces.length, 4);
            done();
        });
        it("should return a 104 card object if 2 decks requested  -- 26 in each suit and 8 Aces", function(done){
            var deck =  new ( DecksModel )().getNewDecks( 2 ).shuffleDecks( deck ).stackOfCards;
            assert.equal( deck.length, 104 );
            var clubs = deck.filter( cards => cards.suit.name === "Clubs");
            assert.equal( clubs.length, 26);
            var spades = deck.filter( cards => cards.suit.name === "Spades");
            assert.equal( clubs.length, 26);
            var diamonds = deck.filter( cards => cards.suit.name === "Diamonds");
            assert.equal( clubs.length, 26);
            var hearts = deck.filter( cards => cards.suit.name === "Hearts");
            assert.equal( clubs.length, 26);
            var aces = deck.filter( cards => cards.card.value === "A");
            assert.equal( aces.length, 8);
            done();
        });
    });
});
