function initNavbar() {

    const nav = document.querySelector("nav");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll(".nav-links a");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");

    });

    links.forEach(link => {

        link.addEventListener("click", () => {

            links.forEach(item => item.classList.remove("active"));
            link.classList.add("active");

            navLinks.classList.remove("open");
            hamburger.classList.remove("active");

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            nav.classList.add("scrolled");

        } else {

            nav.classList.remove("scrolled");

        }

    });

}