var ScoringService = require( './ScoringService' );

class MatchingCards extends ScoringService{
    getScore( sets, flushes, handScore ){
        var self = this;
        var data = pokerData.getData();
        var handSets = {};
        var setsToProcess;
        sets.forEach( s =>{
            if( !handSets[ data.matches[ s.length ] ] ){
                handSets[ data.matches[ s.length ] ] = [];
            }
            handSets[ data.matches[ s.length ] ].push( s );
        });

        // auto create new object
        Object.keys( handSets ).forEach( key =>{
            if( key !== "HighCard" && handSets[ key ].length === 1 ){
                var scoringKey = Object.keys( data.handScoring ).find( scoreKey =>  data.handScoring[scoreKey].name === key )
                handScore = self.processMatch( handSets[ key ], Object.assign( { "key": key }, data.handScoring[ scoringKey ] ), handScore );
            }
        })

        // create "special" matches
        if ( handSets.Pair && handSets.Pair.length > 1 ){
            // just in case there are three pairs, take the top two
            var sortedSets = handSets.Pair.sort( function(a, b ) {
                return ( data.cardKeys[ b[ 0 ].order ] - data.cardKeys[ a[ 0 ].order ] );
            } )
            setsToProcess = [ sortedSets[ 0 ], sortedSets[ 1 ] ];
            handScore = self.processMatch( setsToProcess, Object.assign( { "key": "P2" }, data.handScoring[ "P2" ] ), handScore  );
        }
        if ( handSets.Pair && handSets.ThreeOfAKind ){
            // just in case there are two pairs and a three of a kind, take the top pair
            var sortedSets = handSets.Pair.sort( function(a, b ){
                return ( data.cardKeys[ b[ 0 ].order ] - data.cardKeys[ a[ 0 ].order ] );
            } )
            setsToProcess = [ sortedSets[ 0 ], handSets.ThreeOfAKind[ 0 ] ];
            handScore = self.processMatch( setsToProcess, Object.assign( { "key": "FH" }, data.handScoring[ "FH" ]), handScore  );
        }
        return handScore;
    }

    processMatch( setsInHand, options, handScore ){
        var self = this;
        var data = pokerData.getData();
        var cardValues = [], cardValue;
        setsInHand.forEach( set => {
            set.forEach( card =>{
                self.addClassByElementId( card.position, options.classes );
                cardValue = data.cardValues[ data.cardKeys[ card.order ] ] + "'s";
                if ( cardValues.indexOf( cardValue ) < 0){
                    cardValues.push( cardValue );
                }
            });
        });
        cardValues = cardValues.toString().replace( ",", " and ");
        if( handScore.score < options.score) {
            handScore.score = options.score;
            handScore.high = cardValues;
            handScore.label = options.label;
        };
        return handScore;
    }
}
module.exports = MatchingCards