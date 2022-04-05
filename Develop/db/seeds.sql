DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

INSERT INTO department (name)
VALUES ("Civil"),
       ("Electrical"),
       ("Mechanical"),
       ("Structural";
       
INSERT INTO role (title, salary, department_id)
VALUES ("Junior Engineer", 75000, 1),
       ("Junior Engineer", 75000, 2),
       ("Senior Engineer", 100000, 2),
       ("Senior Engineer", 100000, 3),
       ("Senior Engineer", 100000, 4),
       ("Director of Civil Department", 150000, 1),
       ("Director of Mechanical Department", 150000, 3),
       ("Director of Structural Department", 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christine", "Placek", 1, 1),
       ("Emily", "Eppley", 1, 2),
       ("Erin", "Gilbert", 2, null),
       ("Kirsten", "Hansen", 2, 3),
       ("Abigail", "Olivieri", 2, 4),
       ("Carol", "Boehm", 3, null),
       ("Kate", "Bailey", 3, null),
       ("Pat", "Carney", 3, null)