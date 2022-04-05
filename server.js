// dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
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
// view roles in console
function viewRoles() {
  connection.query(
    "SELECT employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Role FROM employee JOIN role ON employee.role_id = role.id;",
    (err, answer) => {
      if (err) throw err;
      console.log("\n");
      console.table(answer);
      start();
    }
  );
}
// view depts in console
function viewDepartments() {
  connection.query(
    "SELECT employee.first_name AS FirstName, employee.last_name AS LastName, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
    (err, answer) => {
      if (err) throw err;
      console.log("\n");
      console.table(answer);
      start();
    }
  );
}
// view employees in console
function viewEmployees() {
  connection.query(
    "SELECT employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Role, department.name AS Department, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee e on employee.manager_id = e.id;",
    (err, answer) => {
      if (err) throw err;
      console.log("\n");
      console.table(answer);
      start();
    }
  );
}

// add role
function addRole() {
  connection.query(
    "SELECT role.title AS Title, role.salary AS Salary FROM role",
    (err, data) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "roleTitle",
            type: "input",
            message: "What is the title of the role?",
          },
          {
            name: "roleSalary",
            type: "input",
            message: "What is the salary of the role?",
          },
        ])
        .then((answers) => {
          connection.query(
            "INSERT INTO role SET ?",
            {
              title: answers.roleTitle,
              salary: answers.roleSalary,
            },
            (err) => {
              if (err) throw err;
              console.log("\n The role added! \n");

              start();
            }
          );
        });
    }
  );
}

// add dept
function addDepartment() {
  connection.query("SELECT department.name FROM department", (err, data) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "departmentName",
          type: "input",
          message: "What is the Department name?",
        },
      ])
      .then((answer) => {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.departmentName,
          },
          (err) => {
            if (err) throw err;
            console.log("\n The department added! \n");
            start();
          }
        );
      });
  });
}
// add employee(s)
