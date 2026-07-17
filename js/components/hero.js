/*===================================
HERO COMPONENT
===================================*/

class Hero {

    constructor() {

        this.container = document.getElementById("hero");

        if (!this.container) return;

        this.render();

    }

    render() {

        this.container.innerHTML = `

            <div class="container hero-container">

                <div class="hero-content">

                    <span class="hero-eyebrow">

                        Hello, World 👾

                    </span>

                    <h1 class="hero-title">

                        <span>Lintang</span>

                        <span>Maharani</span>

                    </h1>

                    <div class="hero-role">

                        <span id="typed-role"></span>

                        <span class="role-tag">

                            Mahasiswa IT

                        </span>

                    </div>

                    <p class="hero-description">

                        Merancang pengalaman digital yang intuitif
                        dan membangun solusi bermakna —
                        satu baris kode pada satu waktu.

                    </p>

                    <div class="hero-buttons">

                        <a
                            href="#projects"
                            class="btn btn-primary"
                        >

                            Lihat Project

                        </a>

                        <a
                            href="#contact"
                            class="btn btn-outline"
                        >

                            Hubungi Saya

                        </a>

                    </div>

                </div>

                <div class="hero-code">

<pre><code>const developer = {

    name: "Lintang Maharani",

    role: "Developer",

    stack: [

        "React",

        "Node.js",

        "PostgreSQL"

    ],

    hire: () => "Yes! 🚀"

};

developer.hire();</code></pre>

                </div>

            </div>

        `;

    }

}

export default Hero;