const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2];

if(!address){
    console.log('Please Provide An Address');
} else {
    geocode(address, (error, { longitude, latitude, location }) => {
        if(error){
            return console.log(error)
        }
    
         forecast(longitude, latitude , (error, foreCastData) => {
             if(error){
                return console.log(error)
             }
            console.log(location);
            console.log(foreCastData);
            console.log({longitude, latitude})
      })
    })    
}
