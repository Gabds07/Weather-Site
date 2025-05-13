async function getWeatherData(city: string) {

    const apiKey = import.meta.env.VITE_API_KEY_WEATHER;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    const displayWeather = document.querySelector('.weather-display') as Element;

    try {
        if (city === '') return "Error: Type a location.";
        const response = await fetch(weatherURL)
            .then(response => response.json())
            .then(data => {
                const temp: Number = data.main.temp;
                const description: string = data.weather[0].description;
                return `${temp.toFixed()}°C / ` + description;
            });
        displayWeather.classList.remove('error');
        return response;
    } catch (err) {
        console.log(err);
        displayWeather.classList.toggle('error')
        return "Error: the location was not found."
    }
}

export default getWeatherData;
