var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var gameBoardService = new( require( "../../../src/services/setupServices/GameBoard"))();
var sinon = require( 'sinon' );

var sandbox;

describe("Game board setup Unit Tests (using CardsModel)", function(){
    beforeEach(function () {
        sandbox = sinon.createSandbox({});
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("communityCardArea tests", function(){
        it("should return valid HTML to setup the community cards section", function(done){
            var validHtml = gameBoardService.communityCardArea( 5 );
            assert.equal( validHtml, communitySectionHtml );
            done();
        });
    });
    describe("playersCardArea tests", function(){
        it("should return valid HTML to setup the players cards section", function(done){
            sandbox.stub( gameBoardService, "getPlayers" ).returns([
                "MY HAND","Tim","Leanne","Lilly","Robbie"
            ])
            var validHtml = gameBoardService.playersCardArea( 5, 5 );
            assert.equal( validHtml, playerSectionHtml );
            done();
        });
    });
    describe("scoringKey tests", function(){
        it("should return valid HTML to setup the scoring key", function(done){
            var validHtml = gameBoardService.scoringKey();
            assert.equal( validHtml, scoringKeyHtml );
            done();
        });
    });


});

var communitySectionHtml = "<div id=\"comm-board\">"+
    "<div class='communityName'>Community Cards</div>" +
    "<div class='card-container' id='comm_c0'>" +
    "<div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='comm_c1'>" +
    "<div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='comm_c2'>" +
    "<div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='comm_c3'>" +
    "<div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='comm_c4'>" +
    "<div class='card front'></div><div class='card back'></div></div>" +
    "</div>";

var playerSectionHtml = "<div class='player-board'><div class='hand'><div class=player><div class='playerName'>MY HAND</div><div class='score' id='score0'></div></div>" +
    "<div class='card-container myclass' onclick='toggleClass(this.id, \"selected\");' id='p0_c0'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container myclass' onclick='toggleClass(this.id, \"selected\");' id='p0_c1'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container myclass' onclick='toggleClass(this.id, \"selected\");' id='p0_c2'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container myclass' onclick='toggleClass(this.id, \"selected\");' id='p0_c3'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container myclass' onclick='toggleClass(this.id, \"selected\");' id='p0_c4'><div class='card front'></div><div class='card back'></div></div></div>" +

    "<div class='hand'><div class=player><div class='playerName'>Tim</div><div class='score' id='score1'></div></div>" +
    "<div class='card-container' id='p1_c0'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p1_c1'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p1_c2'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p1_c3'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p1_c4'><div class='card front'></div><div class='card back'></div></div></div>" +

    "<div class='hand'><div class=player><div class='playerName'>Leanne</div><div class='score' id='score2'></div></div>" +
    "<div class='card-container' id='p2_c0'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p2_c1'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p2_c2'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p2_c3'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p2_c4'><div class='card front'></div><div class='card back'></div></div></div>" +

    "<div class='hand'><div class=player><div class='playerName'>Lilly</div><div class='score' id='score3'></div></div>" +
    "<div class='card-container' id='p3_c0'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p3_c1'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p3_c2'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p3_c3'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p3_c4'><div class='card front'></div><div class='card back'></div></div></div>" +

    "<div class='hand'><div class=player><div class='playerName'>Robbie</div><div class='score' id='score4'></div></div>" +
    "<div class='card-container' id='p4_c0'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p4_c1'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p4_c2'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p4_c3'><div class='card front'></div><div class='card back'></div></div>" +
    "<div class='card-container' id='p4_c4'><div class='card front'></div><div class='card back'></div></div></div></div>";

var scoringKeyHtml = "<html><head><link rel='stylesheet' type='text/css' href='./cards.css'></head><body>" +
    "<table class=\"scoringKeyTable\"><tr><td><span class=\"four five\">5 of a Kind</span></td></tr>" +
    "<tr><td><span class=\"straight flush royal\">Royal Flush</span></td></tr>" +
    "<tr><td><span class=\"straight flush\">Straight Flush</span></td></tr>" +
    "<tr><td><span class=\"four\">4 of a Kind</span></td></tr>" +
    "<tr><td><span class=\"pair fullhouse\">Full</span> <span class=\"three fullhouse\">House</span></td></tr>" +
    "<tr><td><span class=\"flush\">Flush</span></td></tr>" +
    "<tr><td><span class=\"straight\">Straight</span></td></tr>" +
    "<tr><td><span class=\"three\">3 of a Kind</span></td></tr>" +
    "<tr><td><span class=\"pair two_pair\">2 Pair</span></td></tr>" +
    "<tr><td><span class=\"pair\">Pair</span></td></tr><tr><td>High Card</td></tr></table></body></html>";