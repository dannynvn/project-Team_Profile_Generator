const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //method to retrieve office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    //method to override parent class and retrieve Role as Manager
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;
