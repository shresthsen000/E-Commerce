document.addEventListener("DOMContentLoaded", function () {
    // Hide loader on page load
    const loader = document.getElementById("loader");
    loader.style.display = "flex";
    
    window.addEventListener('load', function () {
        loader.style.display = 'none';
    });

    // Auto-slide function
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const imageLength = slides.length;
    let totalScroll = 0;
    const delay = 2000;
    let autoScroll;

    // Duplicate the slides for smooth transition
    for (let i = 0; i < 1; i++) {
        slider.insertAdjacentHTML("beforeend", slides[i].outerHTML);
    }

    // Function to handle scrolling
    function scrolling() {
        totalScroll++;
        if (totalScroll == imageLength + 1) {
          clearInterval(autoScroll);
          totalScroll = 1;
          slider.style.transition = "0s";
          slider.style.left = "0";
          autoScroll = setInterval(scrolling, delay);
        }
        const widthEl = document.querySelector(
          ".slider > :first-child"
        ).offsetWidth;
        slider.style.left = `-${totalScroll * widthEl}px`;
        slider.style.transition = "2s";
    }

    // Start auto-scroll
    autoScroll = setInterval(scrolling, delay);

    // Previous arrow click event
    const prevArrow = document.querySelector(".prev");
    prevArrow.addEventListener("click", function () {
        clearInterval(autoScroll);
        totalScroll--;
        if (totalScroll < 0) {
            totalScroll = imageLength - 1;
        }
        const widthEl = document.querySelector(".slider > :first-child").offsetWidth;
        slider.style.transition = "0s";
        slider.style.left = '-${totalScroll * widthEl}px';
        setTimeout(() => {
            slider.style.transition = "2s";
            autoScroll = setInterval(scrolling, delay);
        }, 50);
    });

    // Next arrow click event
    const nextArrow = document.querySelector(".next");
    nextArrow.addEventListener("click", function () {
        clearInterval(autoScroll);
        totalScroll++;
        if (totalScroll >= imageLength) {
            totalScroll = 0;
        }
        const widthEl = document.querySelector(".slider > :first-child").offsetWidth;
        slider.style.transition = "0s";
        slider.style.left = '-${totalScroll * widthEl}px';
        setTimeout(() => {
            slider.style.transition = "2s";
            autoScroll = setInterval(scrolling, delay);
        }, 50);
    });

    // Burger menu click event
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});
