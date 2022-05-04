const Manager = require('../lib/Manager.js')

test('create a manager object', () => {
    const manager = new Manager('Tommy', '9', 'tommy@test.com', 'TommyGithub', '1');

    expect(manager.officeNumber).toBe('1');
});

test('getRole() function', () => {
    const manager = new Manager('Tommy', '9', 'tommy@test.com', 'TommyGithub', '1');

    expect(manager.getRole()).toBe('Manager');
});