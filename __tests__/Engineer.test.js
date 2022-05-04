const Engineer = require('../lib/Engineer.js')

test('create an engineer object', () => {
    const engineer = new Engineer('Tommy', 9, 'tommy@test.com', 'TommyGithub');

    expect(engineer.github).toBe('TommyGithub');
});

test('getGithub() function', () => {
    const engineer = new Engineer('Tommy', 9, 'tommy@test.com', 'TommyGithub');

    expect(engineer.getGithub()).toBe('TommyGithub');
});

test('getRole() function', () => {
    const engineer = new Engineer('Tommy', 9, 'tommy@test.com', 'TommyGithub');

    expect(engineer.getRole()).toBe('Engineer');
});