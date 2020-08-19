const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const location = process.argv[2]

if (!location) {
    console.log('Please provide a location')
} else {
    geocode(location, (error, data) => {

    if (error) {
        return console.log(error)        
    }

    forecast(data.latitude, data.longitude, (error, forcastData) => {
        
        if (error) {
            return console.log(error)
        }

        console.log(data.location)
        console.log(forcastData)
    })
})
}

