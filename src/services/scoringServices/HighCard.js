var ScoringService = require( './ScoringService' );

class HighCard extends ScoringService{
    getScore(  sets, flushes, handScore  ){
        var self = this;
        var data = pokerData.getData();
        var highCard = 0;
        sets.forEach(key => {
            if( parseInt( data.cardKeys[ key[ 0 ].order ] ) > parseInt( highCard ) ){
                highCard = data.cardKeys[ key[ 0 ].order ];
            }
        });
        handScore.score = data.handScoring.HC.score;
        handScore.label = data.handScoring.HC.label;
        handScore.high = data.cardValues[ highCard ];
        return handScore;
    }
}
module.exports = HighCard;