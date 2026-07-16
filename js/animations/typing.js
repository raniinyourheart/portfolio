/*===================================
TYPING EFFECT
===================================*/

class Typing {

    constructor() {

        this.element = document.getElementById("typed-role");

        if (!this.element) return;

        this.words = [

            "Web Developer",

            "Frontend Developer",

            "Software Engineer",

            "Tech Enthusiast"

        ];

        this.wordIndex = 0;

        this.charIndex = 0;

        this.isDeleting = false;

        this.type();

    }

    type() {

        const currentWord = this.words[this.wordIndex];

        if (!this.isDeleting) {

            this.element.textContent =
                currentWord.substring(0, this.charIndex + 1);

            this.charIndex++;

        } else {

            this.element.textContent =
                currentWord.substring(0, this.charIndex - 1);

            this.charIndex--;

        }

        let speed = 100;

        if (!this.isDeleting && this.charIndex === currentWord.length) {

            speed = 1800;

            this.isDeleting = true;

        }

        else if (this.isDeleting && this.charIndex === 0) {

            this.isDeleting = false;

            this.wordIndex++;

            if (this.wordIndex >= this.words.length) {

                this.wordIndex = 0;

            }

            speed = 300;

        }

        else if (this.isDeleting) {

            speed = 50;

        }

        setTimeout(() => this.type(), speed);

    }

}

document.addEventListener(

    "DOMContentLoaded",

    () => {

        new Typing();

    }

);