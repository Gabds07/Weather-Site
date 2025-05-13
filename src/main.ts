import getWeatherData from "./controllers/weatherController";
import IconsController from "./controllers/iconsController";

async function displayWeather() {
    const displayWeather = document.querySelector('.weather-display') as Element;
    const submitButton = document.querySelector('.submit-location') as Element;
    const city = document.querySelector('.input-location') as HTMLInputElement;

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const weatherData = await getWeatherData(city.value);
        displayWeather.innerHTML = weatherData;
        IconsController(weatherData);
    });
}

displayWeather();
