import getWeatherData from "./api/weatherApi";
import IconsController from "./controllers/IconsController.ts";
import getLocationData from "./api/locationApi.ts";

function displayWeather() {
    const displayWeather = document.querySelector('.weather-display') as Element;
    const submitButton = document.querySelector('.submit-location') as Element;
    const city = document.querySelector('.input-location') as HTMLInputElement;
    const displayCity = document.querySelector('.display-city') as HTMLElement;
    const loading = document.querySelector('.loading') as HTMLElement;

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();

        loading.classList.add('show-loading');
        submitButton.classList.add('hide');

        displayCity.innerHTML = await getLocationData();
        const weatherData = await getWeatherData(await getLocationData());

        displayWeather.innerHTML = weatherData;

        IconsController(weatherData);

        displayCity.classList.add('show-city');
        loading.classList.remove('show-loading');
        city.value = '';
    });
}
displayWeather();
