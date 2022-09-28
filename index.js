const inquirer = require('inquirer');
const mysql = require("mysql2");
require("console.table");

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'EMPLOYEE_TRACKER'
    })

db.connect(function () {
    console.log(`Connected to the database.`)
    employeeTracker()
});

function employeeTracker() {
    inquirer.prompt([
        {
            type: "list",
            message: "Employee Tracker Application",
            name: "options",
            choices: ["View Department",
            "View Roles",
            "View Employees",
            "Add Departments",
            "Add Roles",
            "Add Employees",
            "Update Employee Role", 
            "Exit Application"]
        }
    ]).then(response => {
        switch (response.options) {
            case "View Department":
                displayDepartment();
                break;
            case "View Roles":
                displayRoles();
                break;
            case "View Employees":
                displayEmployees();
                break;
            case "Add Departments":
                displayAddDepartments();
                break;
            case "Add Roles":
                displayAddRoles();
                break;
            case "Add Employees":
                displayAddEmployees();
                break;
            case "Update Employee Role":
                displayUpdateEmployeeRole();
                break;
            case "Exit Application":
                db.end()
                process.exit(0)

        }
    })
    
}


function displayDepartment() {
    console.log("Display Department")
    db.query("select * from department;", function (err, data) {
        if (err) throw err;
        console.log(err,data)
        console.table(data);
        employeeTracker()
    })
}


  function displayEmployees(){
    console.log("Employee Details")
    db.query("select * from employee",function(err,data){
        if(err) throw err;
        console.table(data);
        employeeTracker()
    })
  }