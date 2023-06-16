const shapes = require("./shapes");
const circle = shapes.circle;
const triangle = shapes.triangle;
const square = shapes.square;

describe("renderCircle", () => {
  it("should update the color and return completed string", () => {
    const circle1 = new circle();
    circle1.setColor("red");
    expect(circle1.render()).toEqual(
      `<circle cx='150' cy='100' r='100' fill='red'/>`
    );
  });
});

describe("renderSquare", () => {
    it("should update the color and return completed string", () => {
      const square1 = new square();
      square1.setColor("red");
      expect(square1.render()).toEqual(
        `<rect x="62.5" y="12.5" rx="10" ry="10" width="175" height="175" fill='red'/>`
      );
    });
  });

  describe("renderTriangle", () => {
    it("should update the color and return completed string", () => {
      const triangle1 = new triangle();
      triangle1.setColor("red");
      expect(triangle1.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill='red'/>`
      );
    });
  });