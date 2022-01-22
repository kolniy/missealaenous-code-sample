const yargs = require('yargs');
const axios = require('axios');

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

const encodedAddress = encodeURIComponent(argv.address);
const geoCodeUrl = `https://geocoder.api.here.com/6.2/geocode.json?app_id=ygV4RZJ6EUmCBMaMYZ2c&app_code=wdtUfuoNH_VsaMDsL36OmA&searchtext=${encodedAddress}`;

axios.get(geoCodeUrl).then((response) => {
    if (response.data.Response.View.length === 0){
        throw new Error('Unable to find that address');
    }

    var lat = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
    var lng = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
    var weatherUrl = `https://api.darksky.net/forecast/cad065fb0a176f2b190c5833e94ba897/${lat},${lng}`;

    console.log(response.data.Response.View[0].Result[0].Location.Address.Label);
    return axios.get(weatherUrl);
}).then((response) => {

    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. it feels like ${apparentTemperature}`);
    
}).catch((e) => {
   if(e.code === 'ENOTFOUND'){
       console.log('Unable to connect to server');
   } else {
       console.log(e.message);
   }
});