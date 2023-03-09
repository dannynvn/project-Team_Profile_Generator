const fs = require('fs');

//render manager card
const renderManager = (employee) => {
    return `
            <div class="card text-center p-3 m-3 bg-dark text-light">
                <h2>Manager</h2>
                <p>ID: ${employee.name}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Office Number: ${employee.officeNumber}</p>
            </div>
    `
}

//render engineer card
const renderEngineer = (employee) => {
    return `
            <div class="card text-center p-3 m-3 bg-secondary text-light">
                <h2>Engineer</h2>
                <p>ID: ${employee.name}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Github: <a href="https://github.com/${employee.github}">${employee.github}</a></p>
            </div>
    `
}

//render intern card
const renderIntern = (employee) => {
    return `
            <div class="card text-center p-3 m-3">
                <h2>Intern</h2>
                <p>ID: ${employee.name}</p>
                <p>Email: ${employee.email}</p>
                <p>School: ${employee.school}</p>
            </div>
    `
}

//generate html and write to team.html
function generateTeam(team) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Team Profiles</title>
</head>
    <body>
        <header class="bg-light fs-1 text-center m-5 p-4"> 
            Team Profiles
        </header>
        <div class="container">
`;

    

    fs.writeFile('./output/team.html', html, (err) => 
        err ? console.log(err) : console.log('Team HTML started!')
    );
    console.log(team);

    for (let i=0; i < team.length; i++) {
        
        const employee = team[i];
        const empRole = employee.getRole();

        //append html cards for each employee
        if (empRole === 'Manager') {
            fs.appendFile('./output/team.html', renderManager(employee), (err) => 
                err ? console.log(err) : console.log('Manager card added!')
            );
        } 
        if (empRole === 'Engineer') {
            fs.appendFile('./output/team.html', renderEngineer(employee), (err) => 
                err ? console.log(err) : console.log('Engineer card added!')
            );
        } 
        if (empRole === 'Intern') {
            fs.appendFile('./output/team.html', renderIntern(employee), (err) => 
                err ? console.log(err) : console.log('Intern card added!')
            );
        }
    }
    completeHtml();
}

//function to complete the html started in generateTeam()
function completeHtml() {
    const htmlEnd = `
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
</html>
`;
    //append and complete index.html after employee cards have been appended
    fs.appendFile('./output/team.html', htmlEnd, (err) => 
        err ? console.log(err) : console.log('Team HTML completed!')
    );
}



module.exports = generateTeam;