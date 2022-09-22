const inquirer = require('inquirer');
const mysql = require("mysql2");
const table = require("console.table");

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'classlist_db'
    })

    db.connect(function(){
    console.log(`Connected to the classlist_db database.`)
    employeeTracker()
    });
  function employeeTracker(){
    
  }