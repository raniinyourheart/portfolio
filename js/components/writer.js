/*===================================
WRITER COMPONENT
===================================*/

import writings from "../../data/writings.js";

class Writer {

    constructor() {

        this.container = document.getElementById("writer-grid");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = "";

        writings.forEach((article) => {

            const card = document.createElement("article");

            card.className = "writer-card";

            card.innerHTML = `

                <div class="writer-image">

                    <img
                        src="${article.image}"
                        alt="${article.title}"
                    >

                </div>

                <div class="writer-content">

                    <span class="writer-category">

                        ${article.category}

                    </span>

                    <h3>

                        ${article.title}

                    </h3>

                    <p>

                        ${article.description}

                    </p>

                    <div class="writer-footer">

                        <span>

                            ${article.date}

                        </span>

                        <a
                            href="${article.link}"
                            target="_blank"
                            class="writer-button"
                        >

                            Read More →

                        </a>

                    </div>

                </div>

            `;

            this.container.appendChild(card);

        });

    }

}

export default Writer;