//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is your name?",
    },

    {
        type: 'input',
        name: 'managerId',
        message: "What is your ID?",
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your email?",
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineer's ID?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's email?",
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's name?",
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the Intern's ID?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's email?",
    },
]

const teamAddQuestion = [
    {
        type: 'list',
        name: 'teamAdd',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'Finish and generate team overview'],
    },
]

//function to write README file
// function writeHtml(fileName, data) {
//     fs.writeFile('', , (err) =>
//       err ? console.log(err) : console.log('Success!')
// )}

//function to initialize app
function init() {
    inquirer
        .prompt(teamAddQuestion)
        .then((response) =>
            console.log(response)
        );
}

//function call to initialize app
init();