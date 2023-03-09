const fs = require('fs');

//render manager card


//render engineer card

//render intern card

//generate html and write to team.html
function generateTeam(teamData) {
    const html = []

    for (let i=0; i < teamData.length; i++) {
        const employee = teamData[i];
        const empRole = employee.getRole();


    }

    fs.writeFile('./output/team.html', html, (err) => 
        err ? console.log(err) : console.log('Team HTML generated!')
    );
}



module.exports = generateTeam;