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
            //"Add Employee Manager",
            "Add Employee",
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
                displayAddDepartment();
                break;
            case "Add Roles":
                displayAddRoles();
                break;
            case "Add Employee":
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
        console.table(data);
        employeeTracker()
    })
}


  function displayEmployees(){
    console.log("Employee Details")
    db.query(`select * from employee;`
    ,function(err,data){
        if(err) throw err;
        console.table(data);
        employeeTracker()
    })
  }

  function displayRoles(){
    console.log("Role Details")
    db.query("select * from roles",function(err,data){
        if(err) throw err;
        console.table(data);
        employeeTracker()
    })
  }


  function displayAddDepartment(){
    inquirer.prompt([

        {
            type:"input",
            name:"department",
            message:"Enter department name"
        }
    ]).then(response => {
        db.query(`insert into DEPARTMENT(name) values
        (?);`,response.department,function(err,data){
            if(err) throw err;
            console.log(data)
            employeeTracker()
        })
    })
  }


  function displayAddEmployees(){
    inquirer.prompt([

        {
            type:"input",
            name:"first_name",
            message:"first_name"
        },
        {
            type:"input",
            name:"LAST_NAME",
            message:"LAST_NAME"
        },
        {
            type:"list",
            name:"role_id",
            message:"role_id",
            choices:[1,2,3,4]
        },
        {
            type:"list",
            name:"manager_id",
            message:"manager_id",
            choices:[1,2,3,4,5,6]
        }
    ]).then(response => {
        db.query(`insert into EMPLOYEE(first_name,LAST_NAME,role_id,manager_id)values
        (?,?, ?, ?);`,[response.first_name,response.LAST_NAME, response.role_id,response.manager_id],function(err,data){
            if(err) throw err;
            console.log(data)
            employeeTracker()
        })
    })
  }

  function displayAddRoles(){
    inquirer.prompt([

        {
            type:"input",
            name:"title",
            message:"title"
        },
        {
            type:"input",
            name:"salaray",
            message:"salaray"
        },
        {
            type:"input",
            name:"DEPARTMENT_ID",
            message:"DEPARTMENT_ID"
        }
    ]).then(response => {
        db.query(`insert into roles(title,salaray,DEPARTMENT_ID) values
        (?,?,?);`,[response.title,response.salaray, response.DEPARTMENT_ID],function(err,data){
            if(err) throw err;
            console.log(data)
            employeeTracker()
        })
    })
  }

  function displayUpdateEmployeeRole(){
    inquirer.prompt([

        {
            type:"list",
            name:"employee_id",
            message:"enter employee_id",
            choices:[1,2,3,4,5,6,7]
        },
        {
            type:"list",
            name:"role_id",
            message:"enter role_id",
            choices:[1,2,3,4]
        }
        
    ]).then(response => {
        db.query(`update employee set role_id =? where id=?;`
       ,[response.role_id,response.employee_id],function(err,data){
            if(err) throw err;
            console.log(data)
            employeeTracker()
        })
    })
  }

  