/*===================================
MAIN
===================================*/

import pageLoader from "./utils/pageLoader.js";

import Theme from "./utils/theme.js";
import MobileMenu from "./utils/mobileMenu.js";
import ActiveLink from "./utils/activeLink.js";

import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import About from "./components/about.js";
import Skills from "./components/skills.js";
import Projects from "./components/projects.js";
import Writer from "./components/writer.js";
import Certificates from "./components/certificates.js";
import Scholarship from "./components/scholarship.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

import "./animations/loading.js";
import "./animations/reveal.js";
import "./animations/typing.js";
import "./animations/parallax.js";
import "./animations/counter.js";

document.addEventListener(

    "DOMContentLoaded",

    async () => {

        /*====================
        LOAD HTML PAGES
        ====================*/

        await pageLoader.loadAll();

        /*====================
        UTILITIES
        ====================*/

        Theme;

        new MobileMenu();

        new ActiveLink();

        /*====================
        COMPONENTS
        ====================*/

        new Navbar();

        new Hero();

        new About();

        new Skills();

        new Projects();

        new Writer();

        new Certificates();

        new Scholarship();

        new Contact();

        new Footer();

    }

);