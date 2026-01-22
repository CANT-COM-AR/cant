(function () {
    function initYear() {
        const year = document.getElementById('y');
        if (!year) {
            return;
        }
        year.textContent = new Date().getFullYear();
    }

    window.initYear = initYear;
})();
