/*===================================
PROJECTS COMPONENT
===================================*/

import projects from "../../data/projects.js";

class Projects {

    constructor() {

        this.container = document.getElementById("projects-grid");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = "";

        projects.forEach((project) => {

            const card = document.createElement("article");

            card.className = "project-card";

            card.innerHTML = `

                <div class="project-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                </div>

                <div class="project-content">

                    <span class="project-category">

                        ${project.category}

                    </span>

                    <h3>

                        ${project.title}

                    </h3>

                    <p>

                        ${project.description}

                    </p>

                    <div class="project-stack">

                        ${project.stack
                            .map(skill => `<span>${skill}</span>`)
                            .join("")}

                    </div>

                    <div class="project-links">

                        <a
                            href="${project.demo}"
                            target="_blank"
                            class="btn btn-primary"
                        >

                            Demo

                        </a>

                        <a
                            href="${project.github}"
                            target="_blank"
                            class="btn btn-outline"
                        >

                            GitHub

                        </a>

                    </div>

                </div>

            `;

            this.container.appendChild(card);

        });

    }

}

export default Projects;