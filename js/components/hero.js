const code = `const developer = {

    name: "Lintang Maharani",

    role: "Software Engineer",

    education: "Politeknik Negeri Batam",

    stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Laravel",
        "Next.js"
    ],

    hire: () => "Yes! 🚀"

};

developer.hire();

// → "Yes! 🚀"
`;

const output = document.getElementById("code-output");

let i = 0;

function typing(){

    if(i < code.length){

        output.textContent += code.charAt(i);

        i++;

        setTimeout(typing,25);

    }

}

typing();