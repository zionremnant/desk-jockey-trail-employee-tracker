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

<img width="566" alt="Screen Shot 2022-04-05 at 1 46 45 AM" src="https://user-images.githubusercontent.com/99617307/161716965-a1be0a88-40fe-4196-a843-3999133d594f.png">

<img width="566" alt="Screen Shot 2022-04-05 at 1 47 11 AM" src="https://user-images.githubusercontent.com/99617307/161717005-4ace6699-e9a4-445d-85f0-685cac1f4fb3.png">

https://user-images.githubusercontent.com/99617307/161716893-9e6f6fce-ce22-4f2e-ba32-9210764a95a7.mp4

## Links

- https://desk-jockey-trail-employee-tra.herokuapp.com/
- https://drive.google.com/file/d/1nOpvqoxhGzGasXdMq9APvGeIxoI5HBN5/view
- https://github.com/zionremnant/desk-jockey-trail-employee-tracker
