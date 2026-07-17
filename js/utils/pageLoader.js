/*===================================
PAGE LOADER
===================================*/

class PageLoader {

    async load(id, file) {

        const element = document.getElementById(id);

        if (!element) return;

        try {

            const response = await fetch(`./pages/${file}`);

            if (!response.ok) {

                throw new Error(

                    `Failed to load ${file}`

                );

            }

            element.innerHTML = await response.text();

        }

        catch (error) {

            console.error(error);

        }

    }

    async loadAll() {

        await Promise.all([

            this.load("header", "navbar.html"),

            this.load("hero", "hero.html"),

            this.load("about", "about.html"),

            this.load("skills", "skills.html"),

            this.load("projects", "projects.html"),

            this.load("writer", "writer.html"),

            this.load("certificates", "certificates.html"),

            this.load("scholarship", "scholarship.html"),

            this.load("contact", "contact.html"),

            this.load("footer", "footer.html")

        ]);

    }

}

const pageLoader = new PageLoader();

export default pageLoader;