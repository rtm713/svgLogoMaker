const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./render');
const renderLogo = render.renderLogo;


const questions = [
    {
        type: "input",
        message: "What text should be in your logo? (MAX 3 characters)",
        name: "logoText",
        default: "SVG",
    },
    {
        type: "input",
        message: "What color do you want the text to be?",
        name: "logoTextColor",
        default: "white",
    },
    {
        type: "list",
        message: "What shape should the logo be?",
        name: "logoShape",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        message: "What color do you want the logo shape to be?",
        name: "logoShapeColor",
        default: "blue",
    },
];

function askQuestions() {
    inquirer.prompt(questions).then(function(answers) {
        fs.writeFile('logo.svg', renderLogo(answers), "utf-8", err => {
            if (err) {
              console.error(err);
            };
          });
    })
    .then(() => console.log("Generated logo.svg"));
};

module.exports = {
    questions,
    askQuestions,
};