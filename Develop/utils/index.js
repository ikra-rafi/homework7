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
      type: 'input',
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
      
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',    
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',    
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be added to run tests?',    
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',  
        choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']  
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',    
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',    
    },
 
  ];


  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

function init(){
    inquirer.prompt(arrayQuestions).then((inquirerResponses) => {
        console.log('Success! You generated a README file ..');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

init();