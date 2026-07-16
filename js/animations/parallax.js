/*===================================
PARALLAX
===================================*/

class Parallax {

    constructor() {

        this.elements = document.querySelectorAll("[data-parallax]");

        if (!this.elements.length) return;

        this.init();

    }

    init() {

        window.addEventListener(

            "scroll",

            () => this.animate()

        );

    }

    animate() {

        const scrollY = window.pageYOffset;

        this.elements.forEach((element) => {

            const speed = Number(

                element.dataset.parallax

            ) || 0.2;

            const y = scrollY * speed;

            element.style.transform =

                `translateY(${y}px)`;

        });

    }

}

document.addEventListener(

    "DOMContentLoaded",

    () => {

        new Parallax();

    }

);