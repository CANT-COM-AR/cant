(function () {
    function initNavMenu() {
        const toggle = document.querySelector('.nav-toggle');
        if (!toggle) {
            return;
        }
        const body = document.body;
        const nav = document.getElementById('site-nav');

        function closeMenu() {
            body.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        }

        toggle.addEventListener('click', () => {
            const isOpen = body.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        });

        if (nav) {
            nav.addEventListener('click', (event) => {
                if (event.target && event.target.tagName === 'A') {
                    closeMenu();
                }
            });
        }
    }

    window.initNavMenu = initNavMenu;
})();
