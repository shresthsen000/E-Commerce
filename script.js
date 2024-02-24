document.addEventListener("DOMContentLoaded", function () {
    // Hide loader on page load
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  
    // Auto-slide function
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const imageLength = slides.length;
    let totalScroll = 0;
    const delay = 2000;
  
    for (let i = 0; i < 1; i++) {
      slider.insertAdjacentHTML("beforeend", slides[i].outerHTML);
    }
  
    let autoScroll = setInterval(scrolling, delay);
  
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
  
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
  
    burgerMenu.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  