const Intern = require('../lib/Intern');

describe('getRole', () => {
    it("should return employee role as Intern", () => {

        const employee = new Intern('Danny', 100, 'danny@testemail.com');

        expect(employee.getRole()).toEqual('Intern');
    })
});

describe('getSchool', () => {
    it("should return intern's school string", () => {

        const employee = new Intern('Danny', 100, 'danny@testemail.com', 'testuniversity');

        expect(employee.getSchool()).toEqual(expect.any(String));
    })
});