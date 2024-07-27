
    const darkModeIcon = document.getElementById('darkMode-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    darkModeIcon.classList.toggle('dark-mode', currentTheme === 'dark');

    darkModeIcon.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        darkModeIcon.classList.toggle('dark-mode', newTheme === 'dark');
    });

