class configurationServices{
    getConfig(){
        return {
            appUrl: process.env.APP_URL || "http://localhost:3000"
        }
    }
}
module.exports = configurationServices;