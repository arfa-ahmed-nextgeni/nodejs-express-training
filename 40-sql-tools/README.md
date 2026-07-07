# 40 - SQL Tools

## Objective

Understand what SQL tools are and why developers use them to work with databases.

## What is an SQL Tool?

An SQL tool is an application used to connect with a database and manage data visually.

In simple words:

```txt
SQL Tool = software to view, query, and manage databases
```

SQL tools help developers work with databases without using only terminal commands.

## Why Do We Use SQL Tools?

SQL tools are useful for:

- Connecting to databases
- Viewing tables
- Viewing rows and columns
- Running SQL queries
- Creating tables
- Updating data
- Deleting data
- Checking database structure
- Exporting or importing data

## Common SQL Tools

Some common SQL tools are:

- DBeaver
- SQLyog
- MySQL Workbench
- pgAdmin
- DataGrip

## DBeaver

DBeaver is a popular database tool.

It supports many databases, such as:

- MySQL
- PostgreSQL
- SQLite
- SQL Server
- Oracle

DBeaver is commonly used because it supports multiple database types in one tool.

## SQLyog

SQLyog is a database management tool mainly used for MySQL and MariaDB.

It is useful for:

- Connecting to MySQL
- Viewing tables
- Running queries
- Managing database data

## MySQL Workbench

MySQL Workbench is an official MySQL tool.

It is used for:

- MySQL database design
- Query execution
- Server management
- Table management

## pgAdmin

pgAdmin is commonly used with PostgreSQL.

It helps developers manage PostgreSQL databases using a visual interface.

## What Can We Do in SQL Tools?

Using SQL tools, we can:

```txt
View databases
View schemas
View tables
View columns
Run SELECT queries
Insert data
Update data
Delete data
Export data
Import data
```

## Connection Details

To connect to a database, we usually need:

```txt
host
port
username
password
database name
```

Example:

```txt
host: localhost
port: 3306
username: root
password: ******
database: training_db
```

## Important Security Note

Do not share real database credentials publicly.

Do not commit database passwords in GitHub.

Use environment variables or secure secret managers for real projects.

## Real Project Usage

In real projects, SQL tools are used to:

- Check if data is saved correctly
- Debug API data issues
- Verify tables and columns
- Run quick queries
- Check relations between tables
- Support backend development

## Summary

SQL tools help developers connect to databases, view database structure, and run queries easily. DBeaver supports many databases, SQLyog is commonly used for MySQL, MySQL Workbench is official for MySQL, and pgAdmin is commonly used for PostgreSQL.

## Practice Questions

### Q1. What is an SQL tool?

An SQL tool is software used to connect with and manage databases.

### Q2. Give two examples of SQL tools.

DBeaver and SQLyog.

### Q3. Which tool is commonly used for PostgreSQL?

pgAdmin.

### Q4. Which tool is official for MySQL?

MySQL Workbench.

### Q5. What details are usually needed to connect to a database?

Host, port, username, password, and database name.
