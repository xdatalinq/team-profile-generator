const inquirer = require('inquirer');
const generatePage = require('./src/generate-page.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArrays = {
  managerArr: [],
  engineerArr: [],
  internArr: []
}

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Please enter the team manager's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a manager name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the team manager's employee ID",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the team manager's email",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter the manager email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office',
      message: "Please enter the team manager's office number",
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log('Please enter the office number!');
            return false;
        }
      }
    },
  ])
  .then(managerData => {

    return managerData;
  })
};

// Create a function to initialize app
const init = () => {
    console.log(`
    =================================    
    Welcome to Team Profile Generator 
    =================================
    
    `);
    promptManager()
    .then( // next step here
    })
    .then(htmlData => {
        return writeFile(htmlData);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        console.log(``);
    })
    .then(copyFile)
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();