const inquirer = require("inquirer");
const fs = require('fs');
const jest = require("jest");
const { Shape, Circle, Triangle, Square } = require("./lib/shape");
const color = require("color");
const genShape = require("./lib/genShape")

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
  validate: input => input.length > 3 ? "What are you doing, please enter up to three characters." : true
},
{
  type: "input",
  name: "textColor",
  message: "Please select text color using Hexidecimal or common keywords.",
  validate: input => {
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
    { name: "Triangle", value: Triangle },
    { name: "Square", value: Square },
    { name: "Circle", value: Circle },
  ],
},
{
  type: "Input",
  name: "shapeColor",
  message:
    "Please select a shape color using Hexidecimal or common keywords.",
  validate: input => {
    try {
      color(input);
      return true;
    } catch (error) {
      return "Please enter a valid color name or code :/";
    }
  },
},
])

// Declaring a new shape constructor to take in user inputs and a svg constructor to tell the app where the results will go.
const newShape = new shape(text, textColor, shapeColor);
  const svg = genShape.genShape(newShape);
  writeToFile(svg,"examples/logo.svg");
};

// function to write the file
function writeToFile(data, path) {
  fs.writeFile(path, data, { flag: "w" }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("You did it!");
    }
  });
}

startInquirer();
