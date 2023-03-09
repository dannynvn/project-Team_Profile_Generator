//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateTeam');
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
        type: 'input',
        name: 'employeeName',
        message: "Adding employee: What is the employee's name?",
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
        type: 'list',
        name: 'empType',
        message: 'Is the employee an Engineer or an Intern?',
        choices: ['Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's GitHub username?",
        when: (response) => response.empType === "Engineer",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the Intern's school name?",
        when: (response) => response.empType === "Intern",
    },
];

const addEmployeeQ = [
    {
        type: 'list',
        name: 'teamAdd',
        message: "Would you like to add another employee?",
        choices: ['Yes','No']
    }
]


//function to run through manager questions
const askManagerQ = () => {
    inquirer
        .prompt(managerQuestions)
        .then(managerResponse => {
            const {managerName:name, managerId:id, managerEmail:email, managerOffice:officeNumber} = managerResponse;
            const manager = new Manager (name, id, email, officeNumber);

            team.push(manager);
            console.log(manager);
            askEmployeeQ()
        })
};


//function to run through employee questions
const askEmployeeQ = () => {
    inquirer
        .prompt(employeeQuestions)
        .then(employeeResponse => {
            if(employeeResponse.empType === 'Engineer') {
                const {employeeName:name, employeeId:id, employeeEmail:email, engineerGithub:github} = employeeResponse;
                const engineer = new Engineer (name, id, email, github);

                team.push(engineer);
                console.log(engineer);
                additionalEmployee();
            } else if (employeeResponse.empType === 'Intern') {
                const {employeeName:name, employeeId:id, employeeEmail:email, internSchool:school} = employeeResponse;
                const intern = new Intern (name, id, email, school);

                team.push(intern);
                console.log(intern);
                additionalEmployee();
            } else {
                additionalEmployee();
            }
        });
};

//question function prompting user if they want to add more employees after the first one
const additionalEmployee = () => {
    inquirer
        .prompt(addEmployeeQ)
        .then(response => {
            if(response.teamAdd === 'Yes') {
                askEmployeeQ();
            } else {
                console.log('finished adding employees!');
                generateTeam(team);
                return
            }
        })
};



//function to initialize app
function init() {
    askManagerQ();
}

//function call to initialize app
init();