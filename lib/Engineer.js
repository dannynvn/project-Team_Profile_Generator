const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //method to retrieve github profile link
    getGithub() {

    }

    //method to override parent class and retrieve Role as Engineer
    getRole() {

    }
}

module.exports = Engineer;
