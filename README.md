# MySQL Employee Tracker

Design the following database schema containing three tables:

![Database Schema](public/assets/IMG/schema.png)

X - **department**:

- **id** - INT PRIMARY KEY
- **name** - VARCHAR(30) to hold department name

X - **role**:

- **id** - INT PRIMARY KEY
- **title** - VARCHAR(30) to hold role title
- **salary** - DECIMAL to hold role salary
- **department_id** - INT to hold reference to department role belongs to

X - **employee**:

- **id** - INT PRIMARY KEY
- **first_name** - VARCHAR(30) to hold employee first name
- **last_name** - VARCHAR(30) to hold employee last name
- **role_id** - INT to hold reference to role employee has
- **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

Build a command-line application that at a minimum allows the user to:

- Add departments, roles, employees

- View departments, roles, employees

- Update employee roles

Bonus points if you're able to:

- Update employee managers

- View employees by manager

- Delete departments, roles, and employees

- View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## How

- Use the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

- Use [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

- Use [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.

- You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

- You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

- Check out [SQL Bolt](https://sqlbolt.com/) for some extra MySQL help.

## Minimum Requirements

- Functional application.

- GitHub repository with a unique name and a README describing the project.

- The command-line application should allow users to:

  - Add departments, roles, employees

  - View departments, roles, employees

  - Update employee roles

### Submission on BCS

You are required to submit the following:

- The URL of the GitHub repository

- A video demonstrating the entirety of the app's functionality
