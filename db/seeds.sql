USE track_db;

INSERT INTO department (id, name)
VALUES (1, "Style Dept"), (2, "Cleanup Dept"), (3, "Setup Dept");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1001, "Fresh Maker", 69000.00, 1), (1002, "Hot Stepper", 45000.00, 2), (1003, "Fire", 47000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Mark", "Emark", 1003, 102), (002, "Dj", "Jazzy-Jeff", 1002, 101), (003, "Belbiv", "Devo", 1001, 104);

