(function () {
    function initCalendar() {
        const title = document.getElementById('calendar-title');
        const grid = document.getElementById('calendar-grid');
        const prev = document.getElementById('cal-prev');
        const next = document.getElementById('cal-next');

        if (!title || !grid || !prev || !next) {
            return;
        }

        const weekdays = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
        let current = new Date();

        function renderCalendar(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const first = new Date(year, month, 1);
            const last = new Date(year, month + 1, 0);
            const startDay = (first.getDay() + 6) % 7;
            const daysInMonth = last.getDate();

            title.textContent = `${first.toLocaleString('es-AR', { month: 'long' })} ${year}`;
            grid.innerHTML = '';

            weekdays.forEach((day) => {
                const el = document.createElement('div');
                el.className = 'calendar-weekday';
                el.textContent = day;
                grid.appendChild(el);
            });

            for (let i = 0; i < startDay; i += 1) {
                const empty = document.createElement('div');
                empty.className = 'calendar-day is-muted';
                empty.textContent = '';
                grid.appendChild(empty);
            }

            for (let d = 1; d <= daysInMonth; d += 1) {
                const cell = document.createElement('div');
                cell.className = 'calendar-day';
                cell.textContent = d.toString();
                grid.appendChild(cell);
            }
        }

        prev.addEventListener('click', () => {
            current = new Date(current.getFullYear(), current.getMonth() - 1, 1);
            renderCalendar(current);
        });
        next.addEventListener('click', () => {
            current = new Date(current.getFullYear(), current.getMonth() + 1, 1);
            renderCalendar(current);
        });

        renderCalendar(current);
    }

    window.initCalendar = initCalendar;
})();
