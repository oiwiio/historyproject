document.addEventListener("DOMContentLoaded", function() {
    const leftButton = document.querySelector('.image-link:first-child');
    const rightButton = document.querySelector('.image-link:last-child');
    const infoText = document.getElementById('infoText');

    leftButton.addEventListener('mouseenter', () => {
        infoText.textContent = 'Тут Саню убивают';
    });

    leftButton.addEventListener('mouseleave', () => {
        infoText.textContent = 'Наведите на кнопки, чтобы увидеть информацию';
    });

    rightButton.addEventListener('mouseenter', () => {
        infoText.textContent = 'А тут крыс вычисляют';
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
});