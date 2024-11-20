var xstatus = true;
const navbar = document.getElementById("navbar");
var nv = false;
document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-black", "shadow-lg");
        nv = true;
    } else {
        navbar.classList.remove("bg-black", "shadow-lg", "pb-3");
        nv = false;
    }
});
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    if (xstatus) {
        // if (nv == false) {
        navbar.classList.add("bg-black", "shadow-lg", "pb-3");
        // }
        menu.classList.remove("hidden");
        menu.classList.add("flex", "grow", "basis-auto");
        xstatus = false;
    } else {
        if (nv == false) {
            navbar.classList.remove("bg-black", "shadow-lg", "pb-3");
        }
        menu.classList.remove("flex", "grow", "basis-auto");
        menu.classList.add("hidden");
        xstatus = true;
    }
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
});
