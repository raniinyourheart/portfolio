const sections = [
    {
        id: "header",
        file: "./pages/navbar.html",
    },
    {
        id: "hero",
        file: "./pages/hero.html",
    },
    {
        id: "about",
        file: "./pages/about.html",
    },
    {
        id: "skills",
        file: "./pages/skills.html",
    },
    {
        id: "projects",
        file: "./pages/projects.html",
    },
    {
        id: "writer",
        file: "./pages/writer.html",
    },
    {
        id: "certificates",
        file: "./pages/certificates.html",
    },
    {
        id: "scholarship",
        file: "./pages/scholarship.html",
    },
    {
        id: "contact",
        file: "./pages/contact.html",
    },
    {
        id: "footer",
        file: "./pages/footer.html",
    }
];

async function loadSections() {

    for (const section of sections) {

        try {

            const response = await fetch(section.file);

            const html = await response.text();

            document
                .getElementById(section.id)
                .innerHTML = html;

        } catch (error) {

            console.error(
                `Failed to load ${section.file}`,
                error
            );

        }

    }

}

document.addEventListener(
    "DOMContentLoaded",
    loadSections
);
const sections = [
    {
        id: "header",
        file: "./pages/navbar.html",
    },
    {
        id: "hero",
        file: "./pages/hero.html",
    },
    {
        id: "about",
        file: "./pages/about.html",
    },
    {
        id: "skills",
        file: "./pages/skills.html",
    },
    {
        id: "projects",
        file: "./pages/projects.html",
    },
    {
        id: "writer",
        file: "./pages/writer.html",
    },
    {
        id: "certificates",
        file: "./pages/certificates.html",
    },
    {
        id: "scholarship",
        file: "./pages/scholarship.html",
    },
    {
        id: "contact",
        file: "./pages/contact.html",
    },
    {
        id: "footer",
        file: "./pages/footer.html",
    }
];

async function loadSections() {

    for (const section of sections) {

        try {

            const response = await fetch(section.file);

            const html = await response.text();

            document
                .getElementById(section.id)
                .innerHTML = html;

        } catch (error) {

            console.error(
                `Failed to load ${section.file}`,
                error
            );

        }

    }

}

document.addEventListener(
    "DOMContentLoaded",
    loadSections
);