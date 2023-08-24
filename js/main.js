// Select the header element
const header = document.querySelector("header");

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
    // Toggle the "sticky" class on the header based on the scroll position
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Select the menu icon and navigation menu
let menu = document.querySelector('#nav-icon');
let navmenu = document.querySelector('navbar');
