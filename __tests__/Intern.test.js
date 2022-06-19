const Intern = require('../lib/Intern');

test('create new intern object', () => {
    const name = 'Ja Morant';
    const id = '12';
    const email = 'ja@nba.com';
    const school = 'murray state';

    const intern = new Intern(name, id, email, school);

    expect(intern.school).toBe('murray state');
})

test("get intern's school", () => {
    const school = 'murray state'
    const intern = new Intern('Ja Morant', '12', 'ja@nba.com', school);

    expect(intern.getSchool()).toBe('murray state');
})

test("get intern's role", () => {
    let intern = new Intern('Ja Morant');

    expect(intern.getRole()).toBe('Intern');
});