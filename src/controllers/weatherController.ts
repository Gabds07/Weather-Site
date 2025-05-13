async function getWeatherData(city: HTMLInputElement | string) {
    
    const apiKey = import.meta.env.VITE_API_KEY_WEATHER;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    try {
        if (city === '') return "Error: Type a location.";
        const response = await fetch(weatherURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const temp = data.main.temp;
                return `${temp}°C`;
            });
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export default getWeatherData;
