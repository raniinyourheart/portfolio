/*===================================
CONTACT COMPONENT
===================================*/

class Contact {

    constructor() {

        this.container = document.getElementById("contact");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = `

            <div class="container">

                <div class="section-header">

                    <span class="section-subtitle">

                        Contact

                    </span>

                    <h2 class="section-title">

                        Let's Work Together

                    </h2>

                    <p class="section-description">

                        Punya ide project, kesempatan magang,
                        atau sekadar ingin berdiskusi?
                        Jangan ragu untuk menghubungi saya.

                    </p>

                </div>

                <div class="contact-grid">

                    <a
                        href="mailto:your@email.com"
                        class="contact-card"
                    >

                        <div class="contact-icon">

                            📧

                        </div>

                        <h3>Email</h3>

                        <p>your@email.com</p>

                    </a>

                    <a
                        href="https://github.com/raniinyourheart"
                        target="_blank"
                        class="contact-card"
                    >

                        <div class="contact-icon">

                            💻

                        </div>

                        <h3>GitHub</h3>

                        <p>github.com/raniinyourheart</p>

                    </a>

                    <a
                        href="https://linkedin.com/in/lintang-maharani-267036327"
                        target="_blank"
                        class="contact-card"
                    >

                        <div class="contact-icon">

                            💼

                        </div>

                        <h3>LinkedIn</h3>

                        <p>Let's Connect</p>

                    </a>

                    <a
                        href="#"
                        class="contact-card"
                    >

                        <div class="contact-icon">

                            🌐

                        </div>

                        <h3>Portfolio</h3>

                        <p>Coming Soon</p>

                    </a>

                </div>

            </div>

        `;

    }

}

export default Contact;