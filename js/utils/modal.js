/*===================================
MODAL
===================================*/

class Modal {

    constructor() {

        this.modal = document.getElementById("modal");

        this.overlay = document.getElementById("modal-overlay");

        this.content = document.getElementById("modal-content");

        this.closeButton = document.getElementById("modal-close");

        if (!this.modal) return;

        this.init();

    }

    init() {

        this.closeButton?.addEventListener(

            "click",

            () => this.close()

        );

        this.overlay?.addEventListener(

            "click",

            () => this.close()

        );

        document.addEventListener(

            "keydown",

            (event) => {

                if (event.key === "Escape") {

                    this.close();

                }

            }

        );

    }

    open(html) {

        this.content.innerHTML = html;

        this.modal.classList.add("show");

        document.body.style.overflow = "hidden";

    }

    close() {

        this.modal.classList.remove("show");

        document.body.style.overflow = "";

    }

}

const modal = new Modal();

export default modal;