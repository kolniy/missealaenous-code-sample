const request = require('request');

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);

request({
    url : `https://geocoder.api.here.com/6.2/geocode.json?app_id=ygV4RZJ6EUmCBMaMYZ2c&app_code=wdtUfuoNH_VsaMDsL36OmA&searchtext=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if(error){
        callback('Unable to reach servers');
    } else if(!body.Response.View[0]){
        callback('Unable to find that address');
    } else if(body.Response.View[0]) {
        callback(undefined, {
            address : body.Response.View[0].Result[0].Location.Address.Label,
            latitude : body.Response.View[0].Result[0].Location.DisplayPosition.Latitude,
            longitude : body.Response.View[0].Result[0].Location.DisplayPosition.Longitude
        })
    }
})

}

module.exports =  {
    geocodeAddress
}