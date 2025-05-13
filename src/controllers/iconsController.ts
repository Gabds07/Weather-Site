function IconsController(weatherData: string) {
    const clearIcon = document.querySelector('.icon-clear') as HTMLElement;
    const fewClouds = document.querySelector('.icon-few-clouds') as HTMLElement;
    const cloudsIcon = document.querySelector('.icon-scattered-clouds') as HTMLElement;
    const showerRainIcon = document.querySelector('.icon-shower-rain') as HTMLElement;
    const rainIcon = document.querySelector('.icon-rain') as HTMLElement;
    const thunderStormIcon = document.querySelector('.icon-thunderstorm') as HTMLElement;

    clearIcon.classList.toggle('show', weatherData.includes('clear', 0) === true);
    fewClouds.classList.toggle('show', weatherData.includes('few clouds', 0) === true);
    cloudsIcon.classList.toggle('show', weatherData.includes('overcast clouds', 0) === true
        || weatherData.includes('scattered clouds', 0) === true
        || weatherData.includes('broken', 0) === true);
    showerRainIcon.classList.toggle('show', weatherData.includes('shower', 0) === true);
    rainIcon.classList.toggle('show', weatherData.includes('rain', 0) === true);
    thunderStormIcon.classList.toggle('show', weatherData.includes('thunderstorm', 0) === true);
}

export default IconsController;
