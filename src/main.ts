import getWeatherData from "./api/weatherApi";
import IconsController from "./controllers/IconsController.ts";
import getLocationData from "./api/locationApi.ts";

function displayWeather() {
    const displayWeather = $('.weather-display') as JQuery;
    const submitButton = $('.submit-location') as JQuery;
    const displayCity = $('.display-city') as JQuery;
    const loading = $('.loading') as JQuery;

    submitButton.on('click', async (e) => {
        e.preventDefault();

        loading.addClass('show-loading');
        submitButton.addClass('hide');

        displayCity.text(await getLocationData());
        const weatherData = await getWeatherData(await getLocationData());

        displayWeather.text(weatherData);

        IconsController(weatherData);

        displayCity.addClass('show-city');
        loading.removeClass('show-loading');
    });
}
displayWeather();
