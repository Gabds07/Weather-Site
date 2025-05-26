function IconsController(weatherData: string) {
    const clearIcon = $('.icon-clear') as JQuery;
    const fewClouds = $('.icon-few-clouds') as JQuery;
    const cloudsIcon = $('.icon-scattered-clouds') as JQuery;
    const showerRainIcon = $('.icon-shower-rain') as JQuery;
    const rainIcon = $('.icon-rain') as JQuery;
    const thunderStormIcon = $('.icon-thunderstorm') as JQuery;

    weatherData.includes('clear', 0) ? clearIcon.addClass('show') : clearIcon.removeClass('show');

    weatherData.includes('few clouds', 0) ? fewClouds.addClass('show') : fewClouds.removeClass('show');
    weatherData.includes('overcast clouds', 0) ? cloudsIcon.addClass('show') :
        weatherData.includes('scattered clouds', 0) ? cloudsIcon.addClass('show') :
        weatherData.includes('broken', 0) ? cloudsIcon.addClass('show') : clearIcon.removeClass('show');

    weatherData.includes('shower', 0) ? showerRainIcon.addClass('show') : showerRainIcon.removeClass('show');

    weatherData.includes('rain', 0) ? rainIcon.addClass('show') : rainIcon.removeClass('show');

    weatherData.includes('thunderstorm', 0) ? thunderStormIcon.addClass('show') : thunderStormIcon.removeClass('show');
}

export default IconsController;
