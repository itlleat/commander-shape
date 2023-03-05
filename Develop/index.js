// Calling all of our required packages and files
const inquirer = require("inquirer");
const fs = require('fs');
const jest = require("jest");
const { Shape, Circle, Triangle, Square } = require("./Assets/lib/shape");
const color = require("color");
const genSvg = require("./Assets/lib/createSvg");


// Here we're creating an async function. 
// We're using async because the syntax is more legible and easier to run than using promise chains.
// Promise chains are still very commonly used and can be teamed up with async.
// For example: await Promise.all([someCall(), anotherCall()]); will await the return of two async functions concurrently.

async function startInquirer() {
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Please enter up to three characters.",
      validate: function (input) {
        if (input.length > 3) {
          return "What are you doing, please enter up to three characters.";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Please select text color using Hexidecimal or common keywords.",
      validate: function (input) {
        try {
          color(input);
          return true;
        } catch (error) {
          return "Please enter a valid color name or code :/";
        }
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Please choose a shape for your logo.",
      choices: [
        { name: "Triangle", value: "Triangle" },
        { name: "Square", value: "Square" },
        { name: "Circle", value: "Circle" },
      ],
    },
    {
      type: "Input",
      name: "shapeColor",
      message:
        "Please select a shape color using Hexidecimal or common keywords.",
      validate: function (input) {
        try {
          color(input);
          return true;
        } catch (error) {
          return "Please enter a valid color name or code :/";
        }
      },
    },
  ]);

  let newShape;
  let svg;
  switch (shape) {
    case "Square":
      newShape = new Square(shapeColor, text, textColor);
      svg = genSvg.genShapeSvg(newShape);
      writeToFile(svg);
      break;
    case "Triangle":
      newShape = new Square(shapeColor, text, textColor);
      svg = genSvg.genShapeSvg(newShape);
      writeToFile(svg);
      break;
    case "Circle":
      newShape = new Square(shapeColor, text, textColor);
      svg = genSvg.genShapeSvg(newShape);
      writeToFile(svg);
      break;
    default:
      console.log("You really should try a valid shape choice");
      return;
  }
}

function writeToFile(data) {
  fs.writeToFile("dist/logo.svg", data, { flag: "w" }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("You did it!");
    }
  });
}

startInquirer();
