const questions = require("./questions");
const shapes = require('./shapes');
const renderShape = shapes.renderShape;


function renderLogo(completedShape) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${completedShape}
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
    </svg>
    `
};

module.exports = {
    renderLogo
};