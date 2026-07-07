# 39 - Basic Concept of Database

## Objective

Understand what a database is and why applications use databases.

## What is a Database?

A database is an organized place where data is stored, managed, and retrieved.

In simple words:

```txt
Database = place to store application data
```

Examples of application data:

- Users
- Products
- Orders
- Payments
- Categories
- Addresses
- Logs

## Why Do We Need a Database?

Without a database, data may be lost when the application stops.

A database helps us store data permanently.

Example:

When a user signs up, we need to save their information somewhere. That data should still exist after the server restarts.

That is why we use a database.

## Database in Real Application

In an eCommerce app, a database can store:

```txt
users
products
orders
cart data
payment records
shipping addresses
inventory
```

## Database Management System

A DBMS means Database Management System.

It is software used to manage databases.

Examples:

- MySQL
- PostgreSQL
- MongoDB
- SQLite
- SQL Server

## Table

In SQL databases, data is stored in tables.

Example table name:

```txt
users
```

A table contains rows and columns.

## Row

A row is one record in a table.

Example:

```txt
1 | Test User | user@example.com
```

This is one user record.

## Column

A column defines one field of data.

Example columns:

```txt
id
name
email
created_at
```

## Record

A record means one complete data entry.

Example:

```txt
One user = one record
One product = one record
One order = one record
```

## Query

A query is a command used to interact with a database.

Examples:

```txt
Get users
Create user
Update user
Delete user
```

In SQL, these are commonly done using:

```txt
SELECT
INSERT
UPDATE
DELETE
```

## Schema

A schema defines the structure of data.

For example, a users table may have:

```txt
id
name
email
password
created_at
```

The schema tells what fields exist and what type of data each field should store.

## Relationship

A relationship means how two tables are connected.

Example:

```txt
One user can have many orders.
```

So `users` and `orders` can be related.

## Persistent Data

Persistent data means data that remains saved even after the application stops or restarts.

Databases are used for persistent data.

## Summary

A database stores application data in an organized way. A DBMS manages the database. In SQL databases, data is usually stored in tables, rows, and columns. Applications use databases to save data permanently and retrieve it when needed.

## Practice Questions

### Q1. What is a database?

A database is an organized place to store and manage data.

### Q2. Why do applications need databases?

Applications need databases to store data permanently.

### Q3. What is a DBMS?

A DBMS is software used to manage databases.

### Q4. What is a row?

A row is one record in a table.

### Q5. What is a column?

A column is one field in a table.

### Q6. What is a query?

A query is a command used to interact with a database.
