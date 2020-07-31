const request = require('request')

// const url = `http://api.weatherstack.com/current?access_key=79a76f2346853bce29476e23b04cc23a&query=74.1996,40.33&units=f`

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ` It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
//     }
// })



const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12.json?types=country&access_token=pk.eyJ1Ijoiam9obnJlaW5lciIsImEiOiJja2RhcGwyejUwZ2p2MnhqcXVzOTNnenRuIn0.7R9tDcoZqcUASFvjcfUqUg&limit=1'

request({url: url2, json: true}, (error, response) => {

    if (error) {
        console.log('Unable to connect to location services')
    } else if (response.body.message || response.body.features.length === 0){
        console.log("unable to locate ")
    } else {
        let latitude = response.body.features[0].center[0]
        let longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)        
    }

})

