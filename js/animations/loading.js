/*===================================
LOADING SCREEN
===================================*/

class Loading {

    constructor() {

        this.loader = document.getElementById("loader");

        if (!this.loader) return;

        this.init();

    }

    init() {

        window.addEventListener("load", () => {

            this.hideLoader();

        });

    }

    hideLoader() {

        this.loader.classList.add("hide");

        setTimeout(() => {

            this.loader.remove();

        }, 700);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    new Loading();

});