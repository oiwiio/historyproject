document.addEventListener("DOMContentLoaded", function() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'blue') {
        body.classList.add('blue-theme');
    } else {
        body.classList.remove('blue-theme');
    }

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function() {
            body.classList.toggle('blue-theme');
            
    
            const isBlueTheme = body.classList.contains('blue-theme');
            localStorage.setItem('theme', isBlueTheme ? 'blue' : 'red');
            
            
             
        });
    }
});