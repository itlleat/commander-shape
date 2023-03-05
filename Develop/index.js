const inquirer = require('inquirer')
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

// const CLI = require('./lib/cli.js');

// // Define the Component class
// class Component {
//     constructor(children = []) {
//       this.children = children;
//     }
  
//     render() {
//       throw new Error("Child class must implement render() method.");
//     }
  
//     renderInnerHTML() {
//       return this.children.map((child) => {
//         return typeof child === "string" ? child : child.render();
//       }).join("");
//     }
//   }
  
//   // Define the Header class
//   class Header extends Component {
//     render() {
//       const date = new Date().toLocaleDateString();
//       return `<header class="header"><h1>Todo Today</h1><p>${date}</p></header>`;
//     }
//   }
  
//   // Define the TaskListItem class
//   class TaskListItem extends Component {
//     constructor(children, priority = false) {
//       super(children);
//       this.priority = priority;
//     }
  
//     render() {
//       const className = this.priority ? "tasks-item-priority" : "";
//       return `<li class="tasks-item ${className}">${this.renderInnerHTML()}</li>`;
//     }
//   }
  
//   // Define the TaskList class
//   class TaskList extends Component {
//     render() {
//       return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
//     }
//   }
  
  
//   // Create the document
//   function createDocument() {
//     const header = new Header();
//     const taskListItems = [
//       new TaskListItem("Task 1"),
//       new TaskListItem("Task 2", true),
//       new TaskListItem("Task 3")
//     ];
//     const taskList = new TaskList(taskListItems);
  
//     return header.render() + taskList.render();
//   }
  

// const cli = new CLI();

// cli.run();
