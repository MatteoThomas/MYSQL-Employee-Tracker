-- Drops the track_db if it exists currently --
DROP DATABASE IF EXISTS track_db;
-- Creates the "track_db" database --
CREATE DATABASE track_db;

-- Makes it so all of the following code will affect track_db --
USE track_db;

-- Creates the table "department" within track_db --
CREATE TABLE department (
    id INTEGER NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Creates the table "roles" within track_db --
CREATE TABLE roles (
  id INTEGER NOT NULL,
  -- Makes a string column called "title" which cannot contain null --
  title VARCHAR(30) NOT NULL,
   -- Makes an numeric column called "salary" --
  salary DECIMAL(10) NOT NULL,
  -- Makes a boolean column called "department_id" which cannot contain null --
  department_id INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

-- Creates the table "employee" within track_db --
CREATE TABLE employee (
    id INTEGER NOT NULL,
  -- Makes a string column called "first_name" which cannot contain null --
    first_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "last_name" which cannot contain null --
    last_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
    role_id INTEGER(10) NOT NULL,
    manager_id INTEGER(10),
    PRIMARY KEY (id)
);

INSERT INTO department (id, name)
VALUES (1, "Style Dept"), (2, "Cleanup Dept"), (3, "Setup Dept");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1001, "Fresh Maker", 69000.00, 1), (1002, "Hot Stepper", 45000.00, 2), (1003, "Fire", 47000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Mark", "Emark", 1003, 102), (002, "Dj", "Jazzy-Jeff", 1002, 101), (003, "Belbiv", "Devo", 1001, 104);


