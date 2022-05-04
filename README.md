# team-profile-generator
Team Profile Generator

#User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info<br>
SO THAT I have quick access to their emails and GitHub profiles<br>
<br><br>
#Acceptance Criteria
<br><br>
GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for my team members and their information<br>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br>
WHEN I click on an email address in the HTML<br>
THEN my default email program opens and populates the TO field of the email with the address<br>
WHEN I click on the GitHub username<br>
THEN that GitHub profile opens in a new tab<br>
WHEN I start the application<br>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number<br>
WHEN I enter the team manager’s name, employee ID, email address, and office number<br>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team<br>
WHEN I select the engineer option<br>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu<br>
WHEN I select the intern option<br>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu<br>
WHEN I decide to finish building my team<br>
THEN I exit the application, and the HTML is generated<br>

#The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.
<br>
#The first class is an Employee parent class with the following properties and methods:
<br>
    name
<br>
    id
<br>
    email
<br>
    getName()
<br>
    getId()
<br>
    getEmail()
<br>
    getRole() // Returns 'Employee'
<br>
#The other three classes will extend Employee.
<br>
#In addition to Employee's properties and methods, Manager will also have:
<br>
    officeNumber
<br>
    getRole() // Overridden to return 'Manager'
<br>
#In addition to Employee's properties and methods, Engineer will also have:
<br>
    github // GitHub username
<br>
    getGithub()
<br>
    getRole() // Overridden to return 'Engineer'
<br>
#In addition to Employee's properties and methods, Intern will also have:
<br>
    school
<br>
    getSchool()
<br>
    getRole() // Overridden to return 'Intern'
<br>
#Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.