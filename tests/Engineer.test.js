const Engineer = require('../lib/Engineer');

describe('getRole', () => {
    it("should return employee role as Engineer", () => {

        const employee = new Engineer('Danny', 100, 'danny@testemail.com');

        expect(employee.getRole()).toEqual('Engineer');
    })
});


describe('getGithub', () => {
    it("should return github string", () => {

        const employee = new Engineer('Danny', 100, 'danny@testemail.com', 'dannygithub');

        expect(employee.getGithub()).toEqual(expect.any(String));
    })
});