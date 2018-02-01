class GameBoard{
    communityCardArea( communityCardCount ){
        var communityContent = '';
        if( communityCardCount ){
            communityContent = "<div id=\"comm-board\"><div class='communityName'>Community Cards</div>";
            for( var i= 0; i < communityCardCount; i++ ){
                communityContent += "<div class='card-container' id='comm_c"+i+"'>" +
                    "<div class='card front'>" +
                    "</div><div class='card back'></div></div>";
            }
            communityContent += "</div>"
        }
        return communityContent;
    }

    scoringKey( ){
        var data = new( require( '../../models/ScoreOfHand'))();
        var handScoring = data.get();
        var scoringKeys = Object.keys( handScoring );
        var item;
        var retVal =
            "<html><head><link rel='stylesheet' type='text/css' href='./cards.css'></head><body>" +
            "<table class=\"scoringKeyTable\">";
        while( scoringKeys.length ){
            // reverse the order by starting at the bottom
            item = scoringKeys.pop();
            retVal += "<tr><td>"+
                handScoring[ item ].label + "</td></tr>"
        }
        return retVal + "</table></body></html>";
    }

    //     var keyToScoring = require( '../../services/scoringServices')
    //     var key = window.open( "", "key", "width=250,height=580,menubar=no,resizable=no,scrollbars=no,toolbar=no,location=no");
    //     key.document.write( scoring.scoringKey() );
    // }

    getPlayers( playerCount ){
        var players = [ "MY HAND" ];
        // if there are no players other than you, return nothing
        if( !playerCount || playerCount < 2 ){
            return players;
        }
        var possiblePlayerList = require( '../../../data/playersNames.json');
        for( var i = 1; i < playerCount; i++){
            var playerIndex = Math.floor( Math.random() * 2000 );
            players.push( possiblePlayerList[ playerIndex ] );
        }
        return players;
    }


    playersCardArea( playerCount, playerCardCount ){
        var players = this.getPlayers( playerCount );
        var playerContents = [];
        var playerBoardContents = "";
        players.forEach( ( p, i ) =>{
            var myClass = p == "MY HAND" ?
                " myclass' onclick='toggleClass(this.id, \"selected\");" :
                '';
            var handContents ="<div class='hand'><div class=player><div class='playerName'>" + p + "</div><div class='score' id='score" + i + "'></div></div>";
            for( var c=0; c < playerCardCount; c++){
                handContents += "<div class='card-container" + myClass +"' id='p" + i + '_c' + c +
                    "'><div class='card front'></div><div class='card back'></div></div>";
            }
            playerContents.push( handContents + "</div>");
        });
        playerContents.forEach( player => {
            playerBoardContents += player;
        });
        return "<div class='player-board'>" + playerBoardContents + "</div>" ;
    };
}
module.exports = GameBoard;