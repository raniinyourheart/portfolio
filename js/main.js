async function loadComponent(id, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Gagal memuat ${file}`);
        }

        const html = await response.text();
        document.getElementById(id).innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "pages/navbar.html");

    initNavbar();

    await loadComponent("home", "pages/home.html");
    await loadComponent("intro-card", "pages/intro-card.html");
    await loadComponent("about", "pages/about.html");
    await loadComponent("skills", "pages/skills.html");
    await loadComponent("projects", "pages/projects.html");
    await loadComponent("certificates", "pages/certificates.html");
    await loadComponent("writer", "pages/writer.html");
    await loadComponent("contact", "pages/contact.html");
    await loadComponent("marquee", "pages/marquee.html");
    await loadComponent("footer", "pages/footer.html");

});