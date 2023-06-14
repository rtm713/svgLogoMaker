const inquirer = require('inquirer');


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