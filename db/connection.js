const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "77!IHATEMYSQL!77",
    database: "track_DB"
});
connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;