import findLatAndLon from "../controllers/LatAndLonController.ts";

const displayWeather = document.querySelector('.weather-display') as Element;

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
        displayWeather.classList.add('error');
        return 'Error: the location was not found.';
    }
}

export default getLocationData;
