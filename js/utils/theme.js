/*===================================
THEME
===================================*/

import Storage from "./storage.js";

class Theme {

    constructor() {

        this.button = document.getElementById("theme-toggle");

        this.root = document.documentElement;

        this.init();

    }

    init() {

        const savedTheme = Storage.get("theme") || "light";

        this.setTheme(savedTheme);

        this.button?.addEventListener(

            "click",

            () => this.toggle()

        );

    }

    toggle() {

        const currentTheme = this.root.dataset.theme;

        const newTheme =

            currentTheme === "light"

                ? "dark"

                : "light";

        this.setTheme(newTheme);

    }

    setTheme(theme) {

        this.root.dataset.theme = theme;

        Storage.set("theme", theme);

        if (this.button) {

            this.button.textContent =

                theme === "light"

                    ? "🌙"

                    : "☀️";

        }

    }

}

export default new Theme();