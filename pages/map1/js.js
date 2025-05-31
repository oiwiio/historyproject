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
    
    
    document.querySelectorAll('.conspirator-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });
    
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});