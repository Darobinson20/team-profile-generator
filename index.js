const inquirer = require('inquirer');
const fs = require('fs');

const questions = ([
    {
    type: 'input',
    name: 'Managers name',
    message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?"
    },
    {
        type: 'number',
        name: 'office',
        message: "What is the manager's office number?"
    }
]);

console.log(`
=================
Add a New Employee
=================
`);

return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Would you like to add an Engineer, or Intern?",
        choices: ["Engineer", "Intern"],
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employees name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log('Please enter in a name.');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter a valid ID number');
                return false;
            }
        }
    }
])

