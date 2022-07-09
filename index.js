const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

const promptUser = () => { 
    return inquirer.prompt([
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
        message: "What is the manager's email?"
    },
    {
        type: 'number',
        name: 'office',
        message: "What is the manager's office number?"
    },
])
.then((data) => {
    const { name, id, email, office} = data;
    const manager = new Manager(name, id, email, office);

    employees.push(manager);
})
};

const addEmployee = data => {
console.log(`
=================
Add a New Employee
=================
`);

// if (!employeeData.addEmployee) {
//     employeeData.addEmployee = [];
// }

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
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter your GitHub username (Required for Engineer's)"
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter what school you currently attend."
    }
])
// .then(addData => {
//     employeeData.addEmployee.push(addData);
//     if (addData.confirmAddEmployee) {
//         return addEmployee(employeeData);
//     } else {
//         return employeeData;
//     }
//})
.then((data) => {
    const { name, id, email, github} = data;
    const engineer = new Engineer(name, id, email, github);

    employees.push(engineer);
})
.then((data) => {
    const { name, id, email, school} = data;
    const intern = new Intern(name, id, email, school);

    employees.push(intern);
})
};

promptUser()
   .then(addEmployee)
   .then(data => {
   
const file = ("./dist/index.html");
console.log("Your team is ready!");

fs.writeFile(file, generatePage, err => {
    if(err) throw new Error(err);

})
   
});
