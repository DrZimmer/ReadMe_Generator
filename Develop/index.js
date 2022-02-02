// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project name? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your project name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project. (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a description of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "install",
    message: "What are the steps required to install your project? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter steps needed to install your project.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["mit", "apache-2.0", "gpl-3.0", "bsd-3-clause", "None"],
    default: ["mit"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be used to run install dependencies?",
    default: "npm install and npm install inquirer",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a usage description.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribute",
    message:
      "What does the user need to know about contributing to the repo?",
  },
];

//  user input INQUIRER QUESTIONS HERE
const begin = () => {
  console.log(`
        ------------------------------------
           Create a README ( * = Required )
        ------------------------------------
        `);
  //inquirer to prompt all questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", generateMarkdown(answers));
    })
    .catch((err) => {
      console.log(err);
    });
};

// Function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    //if error occurs
    if (err) {
      console.log(err);
      return;
    } else {
      //when readme is generated successfully
      console.log("Your README has been generated!");
    }
  });
};

// function call to initialize app
const initialize = () => {
  begin();
  //writeToFile(README.md);
};

initialize();
