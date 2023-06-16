const questions = require("./questions");


function renderLogo(completedShape, answers) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${completedShape}
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.logoTextColor}">${answers.logoText}</text>
  
    </svg>
    `
};

module.exports = {
    renderLogo
};