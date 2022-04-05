# SQL: desk-jockey-trail-employee-tracker

## Overview

This employee tracker creates interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces called **content management systems (CMS)** build a command-line application from scratch to manage a company's employee database, using Node.js, and MySQL.

## Begin

This application is using the MySQL package to connect to the MySQL database and perform queries and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

Database schema contains the following three tables:

- `department`

  - `id`: `INT PRIMARY KEY`

  - `name`: `VARCHAR(40)` to hold department name

- `role`

  - `id`: `INT PRIMARY KEY`

  - `title`: `VARCHAR(40)` to hold role title

  - `salary`: `DECIMAL` to hold role salary

  - `department_id`: `INT` to hold reference to department role belongs to

- `employee`

  - `id`: `INT PRIMARY KEY`

  - `first_name`: `VARCHAR(20)` to hold employee first name

  - `last_name`: `VARCHAR(20)` to hold employee last name

  - `role_id`: `INT` to hold reference to employee role

  - `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

## Screenshot & Demo

<img width="566" alt="Screen Shot 2022-04-05 at 1 59 54 AM" src="https://user-images.githubusercontent.com/99617307/161718584-b7534fb8-6d15-4ded-90a1-9dcf8f251355.png">

<img width="566" alt="Screen Shot 2022-04-05 at 2 00 14 AM" src="https://user-images.githubusercontent.com/99617307/161718607-48a02813-ac07-449e-8084-cf0cee354740.png">

https://user-images.githubusercontent.com/99617307/161718374-b535d2bf-e05d-4578-893b-4d9c189bf212.mp4

## Links

- https://desk-jockey-trail-employee-tra.herokuapp.com/
- https://drive.google.com/file/d/1nOpvqoxhGzGasXdMq9APvGeIxoI5HBN5/view
- https://github.com/zionremnant/desk-jockey-trail-employee-tracker
