const Employee = require('../lib/Employee');

test('create new employee object', () => {
    const employee = new Employee('Ja Morant', 12, 'ja@nba.com');

    expect(employee.name).toBe('Ja Morant');
    expect(employee.id).toBe(12);
    expect(employee.email).toEqual(expect.any(String));

})

test("get employee's name", () => {
    const name = 'Ja Morant'
    const employee = new Employee(name);

    expect(employee.getName()).toBe('Ja Morant')
})

test("get employee's id", () => {
    const id = '804'
    const employee = new Employee('Ja Morant', id);

    expect(employee.getId()).toBe('804');
})

test("get employee's email", () => {
    const email = 'ja@nba.com'
    const employee = new Employee('Ja Morant', 12, email);

    expect(employee.getEmail()).toBe('ja@nba.com')
})

test("get employee's role", () => {
   
    const employee = new Employee('Ja Morant');

    expect(employee.getRole()).toBe('Employee');
})

