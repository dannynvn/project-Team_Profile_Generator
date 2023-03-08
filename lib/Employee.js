class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //method that retrieves name
    getName() {
        return this.name;
    }


    //method that retrieves ID
    getId() {
        return this.id;
    }


    //method that retrieves email
    getEmail() {
        return this.email;
    }


    //method that retrieves role
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;
