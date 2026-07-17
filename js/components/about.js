/*===================================
ABOUT COMPONENT
===================================*/

class About {

    constructor() {

        this.container = document.getElementById("about");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = `

            <div class="container">

                <div class="section-header">

                    <span class="section-subtitle">
                        About Me
                    </span>

                    <h2 class="section-title">
                        Who Am I?
                    </h2>

                </div>

                <div class="about-content">

                    <div class="about-text">

                        <p>
                            Halo! Aku <strong>Lintang Maharani</strong>,
                            mahasiswa D3 Teknik Informatika yang memiliki
                            ketertarikan pada pengembangan website modern,
                            UI/UX, dan software engineering.
                        </p>

                        <p>
                            Aku senang membangun aplikasi yang tidak hanya
                            berfungsi dengan baik, tetapi juga memberikan
                            pengalaman pengguna yang nyaman dan intuitif.
                        </p>

                        <p>
                            Saat ini aku aktif mengembangkan berbagai project,
                            mengikuti kompetisi, serta terus belajar teknologi
                            baru untuk meningkatkan kemampuan sebagai developer.
                        </p>

                    </div>

                    <div class="about-stats">

                        <div class="stat-card">

                            <h3>20+</h3>

                            <span>Projects</span>

                        </div>

                        <div class="stat-card">

                            <h3>12</h3>

                            <span>Gold Medals</span>

                        </div>

                        <div class="stat-card">

                            <h3>3+</h3>

                            <span>Years Learning</span>

                        </div>

                        <div class="stat-card">

                            <h3>∞</h3>

                            <span>Curiosity</span>

                        </div>

                    </div>

                </div>

            </div>

        `;

    }

}

export default About;