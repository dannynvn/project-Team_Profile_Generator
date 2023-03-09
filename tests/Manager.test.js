const Manager = require('../lib/Manager');

describe('getRole', () => {
    it("should return employee role as Manager", () => {

        const employee = new Manager('Danny', 100, 'danny@testemail.com');

        expect(employee.getRole()).toEqual('Manager');
    })
});

describe('getOfficeNumber', () => {
    it("should return manager's office number", () => {

        const employee = new Manager('Danny', 100, 'danny@testemail.com',2);

        expect(employee.getOfficeNumber()).toEqual(expect.any(Number));
    })
});