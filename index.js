//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//team employees add to array
const team = [];

// array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the Manager's name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the Manager's ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the Manager's email?",
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the Manager's office number?",
    },
];

const employeeQuestions = [
    {
        type: 'list',
        name: 'teamAdd',
        message: 'Would you like to add a team member?',
        choices: ['Engineer', 'Intern', 'No'],
    },
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the employee's ID?",
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What is the employee's email?",
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's GitHub username?",
        when: (response) => response.teamAdd === "Engineer",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's school name?",
        when: (response) => response.teamAdd === "Intern",
    },
];


//function to run through manager questions
const askManagerQ = () => {
    inquirer
        .prompt(managerQuestions)
        .then(managerResponse => {
            console.log(managerResponse);
            const {managerName:name, managerId:id, managerEmail:email, managerOffice:officeNumber} = managerResponse;
            const manager = new Manager (name, id, email, officeNumber);

            team.push(manager)
            console.log(manager);
            askEmployeeQ()
        })
};


//function to run through employee questions
const askEmployeeQ = () => {
    inquirer
        .prompt(employeeQuestions)
        .then(employeeResponse => {
            if(employeeResponse.teamAdd === 'Engineer') {
                console.log(employeeResponse);
            } else if (employeeResponse.teamAdd === 'Intern') {
                console.log(employeeResponse);
            } else {
                return //write file
            }
        })
};

// askManagerQ()

//function to initialize app
function init() {
    askManagerQ()
}

//function call to initialize app
init();