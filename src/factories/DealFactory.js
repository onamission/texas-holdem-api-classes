class DealServiceFactory{

    getDealServiceInstance( type ){
        var classes = {
            "community": "DealToCommunity",
            "players": "DealToPlayers",
            "replace": "DealToReplace"
        }
        try{
            var Class = require( "../services/dealServices/" + classes[ type ] ) || false;
        }catch( error ){
            return new Error ( "No Class for type: '" + type + "'");
        }
        return new ( Class )();
    }
}

module.exports = DealServiceFactory;