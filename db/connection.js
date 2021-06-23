const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql_native_password",
    database: "track_DB"
});
connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;