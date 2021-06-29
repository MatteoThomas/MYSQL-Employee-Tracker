USE track_db;

INSERT INTO department (name)
VALUES ("Style Dept"), ("Cleanup Dept"), ("Setup Dept");

INSERT INTO roles (title, salary, department_id)
VALUES ("Fresh Maker", 69000, 1), ("Hot Stepper", 45000, 2), ("Fire", 47000, 3);

INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Mark", "Emark",102), ("Dj", "Jazzy-Jeff",101), ("Belbiv", "Devo",104);

