const questions = require("./questions");



class shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class circle extends shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx='150' cy='100' r='100' fill='${this.color}'/>`;
    }
};

class triangle extends shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.color}'/>`;
    }
};

class square extends shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="62.5" y="12.5" rx="10" ry="10" width="175" height="175" fill='${this.color}'/>`;
    }
};

function renderShape(answers) {
    if (answers.logoShape === 'circle'){
        const renderedShape = new circle(answers.logoShapeColor);
        completedShape = renderedShape.render();
        return completedShape;
    } else if (answers.logoShape === 'square') {
        const renderedShape = new square(answers.logoShapeColor);
        completedShape = renderedShape.render();
        return completedShape;
    } else if (answers.logoShape === 'triangle') {
        const renderedShape = new triangle(answers.logoShapeColor);
        completedShape = renderedShape.render();
        return completedShape;
    }
};

module.exports = {
    renderShape,
    circle,
    square,
    triangle
}