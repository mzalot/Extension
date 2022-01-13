requirejs(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;

var yourApiKey = 'TQDLS0XBBDSP3ABF';
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);

alphaVantageAPI.getDailyData('MSFT')
    .then(dailyData => {
        console.log("Daily data:");
        console.log(dailyData);
    })
    .catch(err => {
        console.error(err);
    });