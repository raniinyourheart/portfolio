/*===================================
SCHOLARSHIP COMPONENT
===================================*/

import scholarships from "../../data/scholarships.js";

class Scholarship {

    constructor() {

        this.container = document.getElementById("scholarship-grid");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = "";

        scholarships.forEach((scholarship) => {

            const card = document.createElement("article");

            card.className = "scholarship-card";

            card.innerHTML = `

                <div class="scholarship-icon">

                    🎓

                </div>

                <div class="scholarship-content">

                    <span class="scholarship-year">

                        ${scholarship.year}

                    </span>

                    <h3>

                        ${scholarship.title}

                    </h3>

                    <p>

                        ${scholarship.description}

                    </p>

                    <span class="scholarship-provider">

                        ${scholarship.provider}

                    </span>

                </div>

            `;

            this.container.appendChild(card);

        });

    }

}

export default Scholarship;