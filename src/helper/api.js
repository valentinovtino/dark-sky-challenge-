export default {
    returnWeatherAPI(location) {
        console.log(location)
        let key = `63f947790ec3152651edf1425989a14c`;
        let url = `https://api.darksky.net/forecast/${key}/${location}`;
        return fetch(url)
        .then(response => response.json())
    }
}