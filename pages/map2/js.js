document.addEventListener("DOMContentLoaded", function() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('blue-theme');
            localStorage.setItem('theme', document.body.classList.contains('blue-theme') ? 'blue' : 'red');
        });
        if (localStorage.getItem('theme') === 'blue') {
            document.body.classList.add('blue-theme');
        }
    }
}); 