const inquirer = require('inquirer')
const fs = require('fs')
const jest = require('jest')

// Inquirer to run a series of prompts
inquirer
  .prompt([
    {
      type: "input",
      name: "character",
      message: "Please enter up to three characters",
    },
    {
      type: "input",
      name: "characterColor",
      message: "Please enter a color keyword or hexadecimal number for your characters",
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape:",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color keyword or hexadecimal number for your characters",
      },
  ])

//   // call on the titles in our prompts to link them to the user input
//   .then((answers) => {
//     let title = answers.title;
//     let proDes = answers.proDes;
//     let inst = answers.inst;
//     let useInf = answers.useInf;
//     let contGuide = answers.contGuide;
//     let test = answers.test;
//     let license = answers.license;
//     let user = answers.user;
//     let email = answers.email;
//     // Using fs to turn the user inputs (answers) into markdown
//     fs.writeFile("README.md", generateMarkdown(answers), (err) =>
//       err ? console.error(err) : console.log("README created!", answers)
//     );
//   });
