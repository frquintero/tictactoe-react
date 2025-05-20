document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const heading = document.querySelector('h1');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update heading text based on mode
        if (body.classList.contains('dark-mode')) {
            heading.textContent = 'Dark Mode Active';
        } else {
            heading.textContent = 'Light Mode Active';
        }
    });
});
