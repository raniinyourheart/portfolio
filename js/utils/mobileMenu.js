/*===================================
MOBILE MENU
===================================*/

class MobileMenu {

    constructor() {

        this.menu = document.getElementById("nav-menu");

        this.button = document.getElementById("hamburger");

        this.links = document.querySelectorAll(".nav-link");

        if (!this.menu || !this.button) return;

        this.init();

    }

    init() {

        this.button.addEventListener(

            "click",

            () => this.toggle()

        );

        this.links.forEach((link) => {

            link.addEventListener(

                "click",

                () => this.close()

            );

        });

    }

    toggle() {

        this.menu.classList.toggle("show");

        this.button.classList.toggle("active");

    }

    close() {

        this.menu.classList.remove("show");

        this.button.classList.remove("active");

    }

}

export default new MobileMenu();