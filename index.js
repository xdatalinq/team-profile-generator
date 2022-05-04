const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generate-page.js');

const promptUser = () => {
    return inquirer.prompt([
            {
              type: 'input',
              name: 'manager-name',
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
              name: 'manager-ID',
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
              name: 'email-manager',
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
              name: 'office-number',
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
            {
              type: 'list',
              name: 'next-step',
              message: "What would you like to do next?",
              choices: ['Add engineer', 'Add intern', 'Finish building my team']
            }
        ])
    .then(pageData => {
    return pageData;
    })
};

// Create a function to write HTML file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

// Create a function to initialize app
const init = () => {
    console.log(`
        
    Welcome to Team Profile Generator: 
    
    
    `);
    promptUser()
    .then(pageData => {
        return generatePage(pageData);
    })
    .then(pageData => {
        return writeFile(pageData);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        console.log(``);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();