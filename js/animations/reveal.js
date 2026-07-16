/*===================================
SCROLL REVEAL
===================================*/

class Reveal {

    constructor() {

        this.elements = document.querySelectorAll("[data-reveal]");

        if (!this.elements.length) return;

        this.init();

    }

    init() {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {

                threshold: 0.15,

                rootMargin: "0px 0px -50px 0px"

            }

        );

        this.elements.forEach((element) => {

            observer.observe(element);

        });

    }

}

document.addEventListener(

    "DOMContentLoaded",

    () => {

        new Reveal();

    }

);