const {
    prompt
} = require('inquirer');
const db = require('./db')
require('console.table');

const start = () => {

};

// Connects to DB
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});