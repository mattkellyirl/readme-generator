const inquirer = require('inquirer');
const markdown = require('./markdown.js');
const fs = require('fs');

// Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project',
    },

    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter installation instructions for your project',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please enter tests for your project',
    },

    {
        type: 'input',
        name: 'license',
        message: 'Please choose a license for your project',
    },

    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    }
];

// Initialise application
function init() {

    inquirer.prompt(questions)

    .then((response) => { 
        writeReadMe(response);
    })
};

// Write user preferences to readme.md
function writeReadMe(response) {

    const fileName = "README.md";
    const markdownContent = markdown(response);
    // const answersString = JSON.stringify(response);

    fs.writeFile(fileName, markdownContent, (err) => {
        err ? console.error('Error writing to ' + fileName) : console.log('Answers written to ' + fileName);
    });
};

// Call to initialise application
init();