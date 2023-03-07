// Constructor to tell the application the size and location of the user elements to be created.
const { Shape, Triangle, Square, Circle } = require("./shape");
function genShape(newShape) {
    return `
    <svg version="1.1" width="300" height="200">
    
    ${newShape.render()}
    
    ${newShape.textRender()}
    
    </svg>`;
  }

module.exports = {
  genShape: genShape,
};
