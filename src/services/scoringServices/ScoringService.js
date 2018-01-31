var cardModel = new( require( '../../models/Cards' ))();

class ScoringService{
    getSetsAndFlushes( hand, player ){
        var sets = [];
        var flushes = [];
        hand.forEach( handCard => {
			// based on order we can look for sets and straights
			if( !sets[ handCard.card.order ] ){ sets[ handCard.card.order ] = [];}
			sets[ handCard.card.order ].push( handCard );

			// the card's suit is to match for flushes and straight flushes
			if( !flushes[ handCard.suit.name ] ){ flushes[ handCard.suit.name ] = []; }
			flushes [handCard.suit.name ].push( handCard );
		});
        return { hand : hand, sets: sets, flushes: flushes };
    }

    addClassByElementId( eleId, style ){
        var ele = $("#" + eleId + " .front > span");
        ele.addClass( style );
    }

    replaceClassByElementId( eleId, style ){
        var ele = $("#" + eleId + " .front > span");
        if( ele.className && eleId.indexOf( "p" ) === 0 ){
            ele.className.replace(new RegExp( '.*', style ) );
        }else{
            ele.addClass( style );
        }
   }

    converToThreeCharStirng( numbr ){
        return  String( numbr ).padStart( 3, "0" );
    }
}
module.exports = ScoringService;