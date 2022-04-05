// dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// create connection info for database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3006,
  user: "root",
  password: "password",
  database: "employees_db",
});

// connect to server & database
connection.connect((err) => {
  if (err) throw err;
  // start after connection
  start();
});

// start function
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Would you like to:",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Exit",
      ],
    })
    .then(function (answer) {
      if (answer.action === "View all Departments") {
        viewDepartments();
      } else if (answer.action === "View all Employees") {
        viewEmployees();
      } else if (answer.action === "View all Roles") {
        viewRoles();
      } else if (answer.action === "Add Role") {
        addRole();
      } else if (answer.action === "Add Department") {
        addDepartment();
      } else if (answer.action === "Add Employee") {
        addEmployee();
      } else if (answer.action === "Update Employee Role") {
        updateEmployeeRole();
      } else if (answer.action === "Exit") {
        connection.end();
      }
    });
}
