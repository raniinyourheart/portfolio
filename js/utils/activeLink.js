/*===================================
ACTIVE NAVIGATION LINK
===================================*/

class ActiveLink {

    constructor() {

        this.sections = document.querySelectorAll("main section[id]");

        this.links = document.querySelectorAll(".nav-link");

        if (!this.sections.length || !this.links.length) return;

        this.init();

    }

    init() {

        window.addEventListener(

            "scroll",

            () => this.update()

        );

        this.update();

    }

    update() {

        const scrollY = window.scrollY;

        this.sections.forEach((section) => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            const sectionId = section.getAttribute("id");

            if (

                scrollY >= sectionTop &&

                scrollY < sectionTop + sectionHeight

            ) {

                this.links.forEach((link) => {

                    link.classList.remove("active");

                });

                const active = document.querySelector(

                    `.nav-link[href="#${sectionId}"]`

                );

                active?.classList.add("active");

            }

        });

    }

}

export default ActiveLink;