/*===================================
CERTIFICATES COMPONENT
===================================*/

import certificates from "../../data/certificates.js";

class Certificates {

    constructor() {

        this.container = document.getElementById("certificates");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = `

            <div class="container">

                <div class="section-header">

                    <span class="section-subtitle">

                        Achievements

                    </span>

                    <h2 class="section-title">

                        Certificates

                    </h2>

                </div>

                <div class="certificates-grid">

                    ${certificates.map(certificate => `

                        <div class="certificate-card">

                            <div class="certificate-image">

                                <img
                                    src="${certificate.image}"
                                    alt="${certificate.title}"
                                >

                            </div>

                            <div class="certificate-content">

                                <span class="certificate-year">

                                    ${certificate.year}

                                </span>

                                <h3>

                                    ${certificate.title}

                                </h3>

                                <p>

                                    ${certificate.organizer}

                                </p>

                                <span class="certificate-medal">

                                    ${certificate.medal}

                                </span>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        `;

    }

}

export default Certificates;