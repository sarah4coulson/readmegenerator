// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const util = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
    
    },
    {
        type: 'input',
        name: 'repo',
        message: "What is your email address?",
        
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "What are the required steps to install your project?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "How can individuals use your project?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What ways can other developers can contribute to your project?",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide tests written for your application and examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['APACHE 2.0','MIT License', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {                                 
    fs.writeFile('README.md', fileName, (err) =>
    )  
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
