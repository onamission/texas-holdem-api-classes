var ScoringService = require( './ScoringService' );

class Straight extends ScoringService{
    getScore( sets, flushes, handScore ){
        var self = this;
        var data = pokerData.getData();
        /* if we have an ace in our hand, add it as a 14th elmement as well */
		if( sets[ 14 ] ){
			sets[ 1 ]= sets[ 14 ];
		}
		// look for straights starting at Ace High and ending at 5
		for( var cardOrder = 14; cardOrder > 4; cardOrder-- ){
			if( sets[  cardOrder ] &&
				sets[ cardOrder - 1  ] &&
				sets[ cardOrder - 2 ] &&
				sets[ cardOrder - 3 ] &&
                sets[ cardOrder - 4 ] &&
                handScore.score < data.handScoring.S.score
            ){
                // change the first element of each card
                self.replaceClassByElementId(sets[ cardOrder ][ 0 ].position, 'straight') ;
                self.replaceClassByElementId( sets[ cardOrder - 1  ][ 0 ].position, 'straight') ;
                self.replaceClassByElementId( sets[ cardOrder - 2  ][ 0 ].position, 'straight') ;
                self.replaceClassByElementId( sets[ cardOrder - 3  ][ 0 ].position, 'straight') ;
                self.replaceClassByElementId( sets[ cardOrder - 4  ][ 0 ].position, 'straight') ;
                var highCard = self.converToThreeCharStirng( cardOrder );

                // if the score is not as high as a straight, set it to a straight
                if( handScore.score < data.handScoring.S.score ) {
                    handScore.label = data.handScoring.S.label;
					handScore.score = data.handScoring.F.score;
                    handScore.high = data.cardValues[cardOrder] + " high";
                };
			}
		}
        return handScore;
    }
}
module.exports = Straight;