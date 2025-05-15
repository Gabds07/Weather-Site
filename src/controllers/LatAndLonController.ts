async function findLatAndLon(): Promise<string>{

    const position = await new Promise<GeolocationPosition>((success) => {
        navigator.geolocation.getCurrentPosition(success);
    });

    const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
    const apiKey = import.meta.env.VITE_API_KEY_WEATHER;
    const locationURL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}`;

    return locationURL;
}

export default findLatAndLon;
