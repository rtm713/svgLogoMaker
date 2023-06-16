const questions = require("./questions");

class circle {
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx='25' cy='75' r='20' fill='${this.color}'/>`;
    }
}