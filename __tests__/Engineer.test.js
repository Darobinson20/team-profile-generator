const Engineer = require('../lib/Engineer');

test('create new engineer object', () => {

const name = 'Ja Morant'
const id = '12'
const email = 'ja@nba.com'
const github = 'jamorant12'


    const engineer = new Engineer(name, id, email, github);

    expect(engineer.github).toBe('jamorant12');
    expect(engineer.name).toBe('Ja Morant');
})

test('get engineer role', () => {
    const engineer = new Engineer('Ja Morant');

    expect(engineer.getRole()).toBe('Engineer')
})

test('get engineer github', () => {
    const github = 'jamorant12'
    const engineer = new Engineer('Ja Morant', '12', 'email', github);

    expect(engineer.getGithub()).toBe('jamorant12');
}) 