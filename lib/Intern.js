const internal = require('stream');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //method to retrieve school name
    getSchool() {
        return this.school;
    }

    //method to override parent class and retrieve Role as Intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
