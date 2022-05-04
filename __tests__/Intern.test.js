const Intern = require('../lib/Intern.js')

test('create an intern object', () => {
    const intern = new Intern('Tommy', 9, 'tommy@test.com', 'University of Toronto');

    expect(intern.school).toBe('University of Toronto');
});

test('getRole() function', () => {
    const intern = new Intern('Tommy', 9, 'tommy@test.com', 'University of Toronto');

    expect(intern.getRole()).toBe('Intern');
});

test('getSchool() function', () => {
    const intern = new Intern('Tommy', 9, 'tommy@test.com', 'University of Toronto');

    expect(intern.getSchool()).toBe('University of Toronto');
});