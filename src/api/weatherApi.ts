async function getWeatherData(city: string) {
    const apiKey = import.meta.env.VITE_API_KEY_WEATHER;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    const displayWeather = document.querySelector('.weather-display') as Element;

    try {
        if (city === '') {
            displayWeather.classList.add('error');
            return "Error: Type a location.";
        }
        const response = await fetch(weatherURL)
            .then(response => response.json())
            .then(current => {
                const temp: Number = current.main.temp;
                const description: string = current.weather[0].description;
                return `${temp.toFixed()}°C / ` + description;
            });
        displayWeather.classList.remove('error');
        return response;
    } catch (err) {
        console.log(err);
        displayWeather.classList.add('error')
        return 'Error: the location was not found.'
    }
}

export default getWeatherData;
