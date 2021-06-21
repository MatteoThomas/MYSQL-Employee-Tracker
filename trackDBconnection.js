const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Be sure to update with your own MySQL password!
  password: 'mysql_native_password',
  database: 'track_DB',
});

const start = () => {
  inquirer
    .prompt({
      name: 'firstPromt',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'View All Employees by Department', 'View All Employees by Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager'],
    })

    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.firstPromt === 'POST') {
        postAuction();
      } else if (answer.postOrBid === 'BID') {
        bidAuction();
      } else {
        connection.end();
      }
    });
};

// Connects to DB
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});