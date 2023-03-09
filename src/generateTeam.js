const fs = require('fs');

//render manager card
function renderManager() {

}

//render engineer card
function renderEngineer() {
    
}

//render intern card
function renderIntern() {
    
}

//generate html and write to team.html
function generateTeam(teamData) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
<header class="bg-light fs-1 text-center m-5 p-4"> 
    Team Profile
</header>
<div class="container justify-content-center text-start">

`;

    const htmlEnd = `
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
`;

    fs.writeFile('./output/team.html', html, (err) => 
        err ? console.log(err) : console.log('Team HTML started!')
    );

    for (let i=0; i < teamData.length; i++) {
        
        
        const employee = teamData[i];
        const empRole = employee.getRole();



        
    }

    //append and complete index.html after employee cards have been appended
    fs.appendFile('./output/team.html', htmlEnd, (err) => 
        err ? console.log(err) : console.log('Team HTML completed!')
    );
    
}



module.exports = generateTeam;