
const Employee = require('../lib/Employee');


describe('getRole', () => {
    it("should return employee role as Employee", () => {

        const employee = new Employee('Danny', 100, 'danny@testemail.com');

        expect(employee.getRole()).toEqual('Employee');
    })
});

describe('getName', () => {
    it("should return employee name", () => {

        const employee = new Employee('Danny', 100, 'danny@testemail.com');

        expect(employee.getName()).toEqual(expect.any(String));
    })
});

describe('getID', () => {
    it("should return employee ID number", () => {

        const employee = new Employee('Danny', 100, 'danny@testemail.com');

        expect(employee.getId()).toEqual(expect.any(Number));
    })
});

describe('getEmail', () => {
    it("should return employee email", () => {

        const employee = new Employee('Danny', 100, 'danny@testemail.com');

        expect(employee.getEmail()).toEqual(expect.any(String));
    })
});

