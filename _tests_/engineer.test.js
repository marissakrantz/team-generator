const Engineer = require('../lib/engineer');

function makeEngineer(
    name = "TestName",
    id = 123,
    email = "test@email.com"
){

    return new Engineer(name, id, email);
}

describe("Test engineer class", () => {
    it("Should have the correct data options", () => {

        const name = "TestName";
        const id = 123;
        const email = "test@email.com";

        const engineer = makeEngineer(name, id, email);

        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);

    });

    it("Should return engineer when getRole() is called", () => {
        
        const expected = "Engineer";
        const engineer = makeEngineer();
        expect(engineer.getRole()).toEqual(expected);
    });

    it("Should return email when getEmail() is called", () => {
        
        const expected = "test@email.com";
        const engineer = makeEngineer(123, 234, expected);
        expect(engineer.getEmail()).toEqual(expected);
    });

    it("Should return name when getName() is called", () => {
        
        const expected = "Engineer";
        const engineer = makeEngineer(expected, 234, 567);
        expect(engineer.getRole()).toEqual(expected);
    });

    it("Should return an ID when getId()) is called", () => {
        
        const expected = "123";
        const engineer = makeEngineer(123, expected, 567);
        expect(engineer.getId()).toEqual(expected);
    });
})