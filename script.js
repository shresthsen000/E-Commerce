document.addEventListener('DOMContentLoaded', function () {
    // Hide loader on page load
    const loader = document.getElementById('loader');
    loader.style.display = 'none';

    // Auto-slide function
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function autoSlide() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;

            // Move the slider to the next slide
            slider.style.transform = `translateX(-${currentIndex * 300}%)`;
        }, 2000);
    }

    autoSlide();

    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
