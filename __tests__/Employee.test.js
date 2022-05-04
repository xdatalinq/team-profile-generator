const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Tommy', 9, 'tommy@test.com');

    expect(employee.name).toBe('Tommy');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@');
    expect(employee.email).toBe('tommy@test.com');
});

test('getName() function', () => {
    const employee = new Employee('Tommy', 9, 'tommy@test.com');

    expect(employee.getName()).toBe('Tommy');
});

test('getID() function', () => {
    const employee = new Employee('Tommy', 9, 'tommy@test.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

test('getEmail() function', () => {
    const employee = new Employee('Tommy', 9, 'tommy@test.com');

    expect(employee.getEmail()).toBe('tommy@test.com');
});

test('getRole() function', () => {
    const employee = new Employee('Tommy', 9, 'tommy@test.com');

    expect(employee.getRole()).toBe('Employee');
});