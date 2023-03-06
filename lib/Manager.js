const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //method to retrieve office number
    getOfficeNumber() {

    }

    //method to override parent class and retrieve Role as Manager
    getRole() {

    }
}

module.exports = Manager;
