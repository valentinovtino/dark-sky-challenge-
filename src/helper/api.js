export default {
    returnWeatherAPI() {
        let key = `37.8267,-122.4233`;
        return fetch(`https://api.darksky.net/forecast/63f947790ec3152651edf1425989a14c/${key}`)
        .then(response => response.json())
    }
}