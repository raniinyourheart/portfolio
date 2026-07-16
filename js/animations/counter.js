/*===================================
COUNTER ANIMATION
===================================*/

class Counter {

    constructor() {

        this.counters = document.querySelectorAll("[data-counter]");

        this.speed = 200;

        this.init();

    }

    init() {

        if (!this.counters.length) return;

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        this.animate(entry.target);

                        observer.unobserve(entry.target);

                    }

                });

            },

            {

                threshold: 0.4

            }

        );

        this.counters.forEach((counter) => {

            observer.observe(counter);

        });

    }

    animate(counter) {

        const target = Number(counter.dataset.counter);

        const increment = Math.ceil(target / this.speed);

        let current = 0;

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent = current;

            requestAnimationFrame(update);

        };

        update();

    }

}

document.addEventListener("DOMContentLoaded", () => {

    new Counter();

});