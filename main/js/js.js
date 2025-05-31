document.addEventListener("DOMContentLoaded", function() {
    const leftButton = document.querySelector('.image-link:first-child');
    const rightButton = document.querySelector('.image-link:last-child');
    const infoText = document.getElementById('infoText');

    leftButton.addEventListener('mouseenter', () => {
        infoText.textContent = 'Последние день из жизни Александра II ';
    });

    leftButton.addEventListener('mouseleave', () => {
        infoText.textContent = 'Наведите на кнопки, чтобы увидеть информацию';
    });

    rightButton.addEventListener('mouseenter', () => {
        infoText.textContent = 'Области,где вели свою деятельность Народники';
    });

    rightButton.addEventListener('mouseleave', () => {
        infoText.textContent = 'Наведите на кнопки, чтобы увидеть информацию';
    });

    const modal = document.getElementById("modal");
    const btn = document.querySelector(".modal-btn");
    const closeBtn = document.querySelector(".close-btn");

    if (modal && btn && closeBtn) {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    } 
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