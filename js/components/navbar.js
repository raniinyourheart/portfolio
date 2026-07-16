const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// ==========================================
// NAVBAR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.getElementById("header");

    // ==========================
    // Mobile Menu
    // ==========================

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");

    });

    // ==========================
    // Close menu ketika klik link
    // ==========================

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            hamburger.classList.remove("active");

        });

    });

    // ==========================
    // Navbar Shadow ketika scroll
    // ==========================

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

});