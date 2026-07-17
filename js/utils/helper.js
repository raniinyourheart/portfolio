/*===================================
HELPERS
===================================*/

const Helpers = {

    $(selector) {

        return document.querySelector(selector);

    },

    $$(selector) {

        return document.querySelectorAll(selector);

    },

    create(tag, className = "") {

        const element = document.createElement(tag);

        if (className) {

            element.className = className;

        }

        return element;

    },

    scrollTo(target) {

        document.querySelector(target)?.scrollIntoView({

            behavior: "smooth"

        });

    },

    capitalize(text = "") {

        return text.charAt(0).toUpperCase() + text.slice(1);

    },

    formatNumber(number) {

        return new Intl.NumberFormat().format(number);

    },

    random(min, max) {

        return Math.floor(

            Math.random() * (max - min + 1)

        ) + min;

    },

    debounce(callback, delay = 300) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    },

    throttle(callback, delay = 200) {

        let waiting = false;

        return (...args) => {

            if (waiting) return;

            callback(...args);

            waiting = true;

            setTimeout(() => {

                waiting = false;

            }, delay);

        };

    },

    sleep(ms) {

        return new Promise(resolve =>

            setTimeout(resolve, ms)

        );

    }

};

export default Helpers;