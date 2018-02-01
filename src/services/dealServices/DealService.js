class DealService{
    /**
         * deals cards to the community hand
         *
         * @param {object} gamePlay metadata describing the rules of the game
         * @param {number} roundToPlay which round needs to be dealt
         * @returns {array} of cards with postion at the table
         * @memberof DealToCommunity
         */
        dealCards( gamePlay, roundToPlay ){
            // this function needs to be over-written or error
            throw Error ( "Function not over written" );
        }
}
module.exports = DealService;