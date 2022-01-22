const request = require('request');

 var getWeather = (lat,lng, callback) => {
    request({
        url : `https://api.darksky.net/forecast/cad065fb0a176f2b190c5833e94ba897/${lat},${lng}`,
        json : true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather details');
        }
    });
 };

 module.exports.getWeather = getWeather;
