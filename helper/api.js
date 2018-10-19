export default {
    returnWeatherAPI(latitude, longitude) {
        return fetch(`https://api.darksky.net/forecast/63f947790ec3152651edf1425989a14c/${latitude},${longitude}`)
        .then(response => response.json())
    }
}