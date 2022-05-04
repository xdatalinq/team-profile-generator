const Manager = require('../lib/Manager.js')

test('create a manager object', () => {
    const manager = new Manager('Tommy', 9, 'tommy@test.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getRole() function', () => {
    const manager = new Manager('Tommy', 9, 'tommy@test.com', 1);

    expect(manager.getRole()).toBe('Manager');
});