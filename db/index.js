const mysql = require('mysql');
const util = require("util");

const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Be sure to update with your own MySQL password!
  //password: 'mysql_native_password',
  password: '77!IHATEMYSQL!77',
  database: 'track_DB',
});

connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;