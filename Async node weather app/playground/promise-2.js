const request = require('request');

var geoCodeAddress = (address) => {
 var encodedAdress = encodeURIComponent(address);
 return new Promise((resolve, reject) => {
     request({
        url : `https://geocoder.api.here.com/6.2/geocode.json?app_id=ygV4RZJ6EUmCBMaMYZ2c&app_code=wdtUfuoNH_VsaMDsL36OmA&searchtext=${encodedAdress}`,
        json: true
     }, (error, response, body) => {
        if(error){
            reject('Unable to reach servers');
        } else if(!body.Response.View[0]){
            reject('Unable to find that address');
        } else if(body.Response.View[0]) {
            resolve({
                address : body.Response.View[0].Result[0].Location.Address.Label,
                latitude : body.Response.View[0].Result[0].Location.DisplayPosition.Latitude,
                longitude : body.Response.View[0].Result[0].Location.DisplayPosition.Longitude
            });
        }
     });
 });
};

geoCodeAddress('19146').then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
}, (errorMsg) => {
    console.log(errorMsg);
})