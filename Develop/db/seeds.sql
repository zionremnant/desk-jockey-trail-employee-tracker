USE employees_db;

INSERT INTO department (name)
VALUES ("Civil"),
       ("Electrical"),
       ("Mechanical"),
       ("Structural");
       
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
VALUES ("Christine", "Placek", 1, 6),
       ("Emily", "Eppley", 2, 3),
       ("Erin", "Gilbert", 3, null),
       ("Kirsten", "Hansen", 4, 7),
       ("Abigail", "Olivieri", 5, 8),
       ("Carol", "Boehm", 6, null),
       ("Kate", "Bailey", 7, null),
       ("Pat", "Carney", 8, null)