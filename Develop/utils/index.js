// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');
// added 1.30.21
const path = require('path');
// end
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
// inquirer
//   .prompt(
    
   const arrayQuestions = [
    //Project Title
    {
      type: "input",
      name: 'ProjectTitle',
      message: 'Enter your project title',
    },
    //Read me Description
    {
      type: 'input',
      name: 'Description',
      message: 'Write a brief description of your project',
    },
    //Installation instruction
    {
      type: 'input',
      name: 'Installation Instruction ',
      message: 'Type in your installation instruction?',
    },
    // Usage information
    {
      type: 'input',
      name: 'Usage ',
      message: 'Please write usage information ',
    },
    //Input
    {
      type: 'input',
      name: 'Contribution Guidelines ',
      message: 'Please write Contribution Guidelines ',
    },
    {
      type: 'input',
      name: 'Test instruction  ',
      message: 'Are there any test instruction ? ',
    },
    {
      type: 'list',
      name: 'Application License',
      message: 'Choose your Licence ',
      choices :['License 1', 'License 2','License 3']
    },
    {
type:"input",
name :"questions",
message: "Enter your github username.",
    },
    {
    type : "input",
    name: "LinkedIn",
    message: 'Enter your LinedIn URL.',
    },
    {
    type : "input",
    name: "Email",
    message: 'Enter your Email Address',
    },
  ];


  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

function init(){
    inquirer.prompt(arrayQuestions).then((inquirerResponses) => {
        console.log('Success! Generating README ..');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

init();