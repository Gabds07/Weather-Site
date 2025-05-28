function ThemeController() {
    const toggleBtn = $('#theme-toggle') as JQuery;
    const body = $(document.body) as JQuery

    toggleBtn.text('☀️');

    toggleBtn.on('click', () => {
        if(toggleBtn.text() === '☀️') {
            body.removeClass('dark');
            toggleBtn.text('🌙');
        } else if(toggleBtn.text() === '🌙') {
            body.addClass('dark');
            toggleBtn.text('☀️');
        }
    });
}

export default ThemeController;
