const connection = require('./connection');

class DB {

  constructor(connection) {
    this.connection = connection
  }

  viewAllEmp() {
    return this.connection.query('SELECT * FROM employee;');
  }

  viewAllroles() {
    return this.connection.query('SELECT * FROM roles;');
  }

  viewAllDept() {
    return this.connection.query('SELECT * FROM department;');
  }

  addEmp(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee)
  }

  addRole(roles) {
    return this.connection.query('INSERT INTO roles SET ?', roles)
  }

  addDept(department) {
    return this.connection.query("INSERT INTO department SET ?", department)
  }

  updateRole(roles) {
    return this.connection.query("UPDATE INTO employee SET ?", roles)
  }

}

module.exports = new DB(connection);