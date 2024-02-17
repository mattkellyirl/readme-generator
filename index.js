const inquirer = require('inquirer');

const readmeQuestions = [
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
    },
];

inquirer.prompt(readmeQuestions)
    .then((answers) => { 
        console.log('Answers:', answers);
    })