const request = require('request')

const forecast = (longitude, latitude, callback) => {

    url = `http://api.weatherstack.com/current?access_key=79a76f2346853bce29476e23b04cc23a&query=${latitude},${longitude}&units=f`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Error! Unable to connect to weather service at this time.", undefined)
        } else if (response.body.error) {
            callback("Error! Unable to find location.", undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ` It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast