/*===================================
FOOTER COMPONENT
===================================*/

class Footer {

    constructor() {

        this.container = document.getElementById("footer");

        if (!this.container) return;

        this.render();

    }

    render() {

        const year = new Date().getFullYear();

        this.container.innerHTML = `

            <div class="container">

                <div class="footer-content">

                    <div class="footer-brand">

                        <a href="#hero" class="footer-logo">

                            LM

                        </a>

                        <p class="footer-description">

                            Building digital experiences with
                            creativity, passion, and clean code.

                        </p>

                    </div>

                    <div class="footer-links">

                        <a href="#about">About</a>

                        <a href="#skills">Skills</a>

                        <a href="#projects">Projects</a>

                        <a href="#writer">Writer</a>

                        <a href="#contact">Contact</a>

                    </div>

                    <div class="footer-social">

                        <a
                            href="https://github.com/raniinyourheart"
                            target="_blank"
                            aria-label="GitHub"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/lintang-maharani-267036327"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

                <div class="footer-bottom">

                    <p>

                        © ${year} Lintang Maharani.
                        All Rights Reserved.

                    </p>

                </div>

            </div>

        `;

    }

}

export default Footer;