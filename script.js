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
        const widthEl = document.querySelector(".slider > :first-child").offsetWidth;
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
        const widthEl = document.querySelector(".slider > :first-child").offsetWidth;
        if (totalScroll < 0) {
            totalScroll = imageLength - 1;
        }
        slider.style.transition = "0s";
        slider.style.left = `-${totalScroll * widthEl}px`;
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
        const widthEl = document.querySelector(".slider > :first-child").offsetWidth;
        if (totalScroll >= imageLength) {
            totalScroll = 0;
        }
        slider.style.transition = "0s";
        slider.style.left = `-${totalScroll * widthEl}px`;
        setTimeout(() => {
            slider.style.transition = "2s";
            autoScroll = setInterval(scrolling, delay);
        }, 50);
    });

    const productTilesContainer = document.getElementById('productTiles');

    // Static data for product ratings and image link
    const products = [
        { name: 'Product A', rating: 4.5, image: 'E-Commerce\photos\frock.png' },
        { name: 'Product B', rating: 3.8, image: 'E-Commerce\photos\crop.png' },
        { name: 'Product C', rating: 4.2, image: 'E-Commerce\photos\saree.png' },
        { name: 'Product D', rating: 4.0, image: 'E-Commerce\photos\jeans.png' }
    ];

    // Sort products based on rating in descending order
    products.sort((a, b) => b.rating - a.rating);

    // Generate product tiles and append them to the container
    products.slice(0, 4).forEach(product => {
        const productTile = document.createElement('div');
        productTile.classList.add('product-tile');
        productTile.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-rating">Rating: ${product.rating}</div>
        `;
        productTilesContainer.appendChild(productTile);
    });

    // Burger menu click event
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});
