(function () {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.initNavMenu) {
            window.initNavMenu();
        }
        if (window.initYear) {
            window.initYear();
        }
        if (window.initCalendar) {
            window.initCalendar();
        }
    });
})();
