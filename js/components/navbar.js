/*===================================
NAVBAR COMPONENT
===================================*/

class Navbar {

    constructor() {

        this.header = document.getElementById("header");

        if (!this.header) return;

        this.init();

    }

    init() {

        window.addEventListener(

            "scroll",

            () => this.handleScroll()

        );

    }

    handleScroll() {

        if (window.scrollY > 50) {

            this.header.classList.add("scrolled");

        }

        else {

            this.header.classList.remove("scrolled");

        }

    }

}

export default Navbar;