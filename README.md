# SQL: desk-jockey-trail-employee-tracker

## Overview

This employee tracker creates interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces called **content management systems (CMS)** build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Begin

This application is using the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to the MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises.

Database schema contains the following three tables:

- `department`

  - `id`: `INT PRIMARY KEY`

  - `name`: `VARCHAR(30)` to hold department name

- `role`

  - `id`: `INT PRIMARY KEY`

  - `title`: `VARCHAR(30)` to hold role title

  - `salary`: `DECIMAL` to hold role salary

  - `department_id`: `INT` to hold reference to department role belongs to

- `employee`

  - `id`: `INT PRIMARY KEY`

  - `first_name`: `VARCHAR(30)` to hold employee first name

  - `last_name`: `VARCHAR(30)` to hold employee last name

  - `role_id`: `INT` to hold reference to employee role

  - `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

## Screenshot & Demo

## Links

-
