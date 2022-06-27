const inquirer = require("inquirer");
const generatePage = require("./src/generate-page.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the team manager's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a manager name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the team manager's employee ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the team manager's email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the manager email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Please enter the team manager's office number",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the office number!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.office
      );
      team.push(manager);
      menu();
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's employee ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Please enter the engineer's GitHub username",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter a username!");
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.office
      );
      team.push(engineer);
      menu();
    });
}

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the intern's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the intern's employee ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Please enter the intern's school",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter a school name!");
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.office
      );
      team.push(intern);
      menu();
    });
}

function menu() {
  inquirer
    .prompt({
      type: "list",
      choices: ["add an Engineer", "add an Intern", "finish building team"],
      name: "menu",
      message: "What would you like to do?",
    })
    .then((userRes) => {
      switch (userRes.menu) {
        case "add an Engineer":
          break;
        case "add an Intern":
          break;
        default: "finish building team"  
          break;
      }
    });
}

// Create a function to initialize app
const init = () => {
  console.log(`
    =================================    
    Welcome to Team Profile Generator 
    =================================
    
    `);
  promptManager();
};

// Function call to initialize app
init();
