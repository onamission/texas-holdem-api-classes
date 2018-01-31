class JsonData{
    getDataFromFile( fileName ){
        var dataSet = require( "../../data/" + fileName + ".json" );
        return dataSet;
    }
}
module.exports = JsonData;