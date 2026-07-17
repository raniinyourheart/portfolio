/*===================================
SKILLS COMPONENT
===================================*/

import skills from "../../data/skills.js";

class Skills {

    constructor() {

        this.container = document.getElementById("skills-grid");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = "";

        skills.forEach((skill) => {

            const card = document.createElement("article");

            card.className = "skill-card";

            card.innerHTML = `

                <div class="skill-icon">

                    <img
                        src="${skill.icon}"
                        alt="${skill.name}"
                    >

                </div>

                <div class="skill-content">

                    <h3>

                        ${skill.name}

                    </h3>

                    <p>

                        ${skill.category}

                    </p>

                    <div class="skill-level">

                        <div
                            class="skill-progress"
                            style="width:${skill.level}%"
                        ></div>

                    </div>

                    <span class="skill-percent">

                        ${skill.level}%

                    </span>

                </div>

            `;

            this.container.appendChild(card);

        });

    }

}

export default Skills;