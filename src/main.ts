import getWeatherData from "./controllers/weatherController";

async function displayWeather() {
    const displayWeather = document.querySelector('.weather-display') as Element;
    const submitButton = document.querySelector('.submit-location') as Element;
    const city = document.querySelector('.input-location') as HTMLInputElement;

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        displayWeather.innerHTML = await getWeatherData(city.value);
    });
}

displayWeather();
