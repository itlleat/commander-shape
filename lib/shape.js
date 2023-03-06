class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setText(str) {
    this.text = str;
  }
  setTextColor(str) {
    this.textColor = str;
  }
  setColor(str) {
    this.shapeColor = str;
  }
  textRender() {
    return `<text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    // text-anchor="middle"
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect x="100" y="50" width="150" height="150" fill="${this.shapeColor}"/>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };
