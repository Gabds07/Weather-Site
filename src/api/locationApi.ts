import findLatAndLon from "../controllers/LatAndLonController.ts";

const displayWeather = $('.weather-display');

async function getLocationData() {
    try {
        const response = await fetch(await findLatAndLon())
            .then(response => response.json())
            .then(data => {
                return `${data[0].name}, ${data[0].country}`;
            });

        return response;
    } catch (err) {
        console.log(err);
        displayWeather.addClass('error');
        return 'Error: the location was not found.';
    }
}

export default getLocationData;
