const yargs = require('yargs');
const geoCode = require('./geocode/geocode');
const weather = require('./weather/weather')


const argv = yargs
.options({
 a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string : true
 }
})
.help()
.alias('help', 'h')
.argv;


geoCode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
   console.log(results.address);
   weather.getWeather(results.latitude,results.longitude, (errorMsg, weatherResults) => {
    if(errorMsg){
        console.log(errorMsg);
    } else {
        console.log(`It's currently ${weatherResults.temperature}. it feels like ${weatherResults.apparentTemperature}.`);
    }
});
    }
});

