const questions = require("./questions");


function renderLogo(answers) {
    return `
    "this is from render logo function"
    ${answers}
    `
};

module.exports = {
    renderLogo
};