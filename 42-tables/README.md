# 42 - Tables

## Objective

Understand what a table is in a SQL database.

## What is a Table?

A table is a place where related data is stored in a SQL database.

In simple words:

```txt
Table = collection of related records
```

Example table names:

```txt
users
products
orders
payments
```

## Table Structure

A table is made of:

```txt
rows
columns
```

Example users table:

```txt
id | name      | email
1  | Test User | user@example.com
2  | Demo User | demo@example.com
```

Here:

- `id`, `name`, and `email` are columns
- Each line of data is a row
- The whole structure is a table

## Why Tables Are Used

Tables help store data in an organized way.

Example:

A `users` table stores user data.

A `products` table stores product data.

An `orders` table stores order data.

This makes data easier to search, update, and manage.

## Table Name

Table names usually describe the type of data stored inside the table.

Examples:

```txt
users
products
orders
order_items
categories
```

Common convention is to use plural names like `users` and `products`.

## Rows in Table

A row is one record in a table.

Example:

```txt
1 | Test User | user@example.com
```

This is one user row.

## Columns in Table

A column defines one field of data.

Example columns in users table:

```txt
id
name
email
password
created_at
```

Each row follows the same column structure.

## Example SQL Table

Example SQL command:

```sql
CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  email VARCHAR(150)
);
```

This creates a `users` table with three columns:

```txt
id
name
email
```

## Real Project Example

In an eCommerce project, common tables can be:

```txt
users
products
categories
orders
order_items
payments
addresses
```

Each table stores one type of data.

## Table vs Database

A database can contain many tables.

Example:

```txt
Database: ecommerce_db
Tables: users, products, orders, payments
```

So database is the main storage, and tables are organized sections inside it.

## Summary

A table stores related data in rows and columns. In SQL databases, tables are used to organize data like users, products, orders, and payments. A database can contain many tables.

## Practice Questions

### Q1. What is a table?

A table is a collection of related records in a database.

### Q2. What are the two main parts of a table?

Rows and columns.

### Q3. What does one row represent?

One record.

### Q4. What does one column represent?

One field of data.

### Q5. Can one database have multiple tables?

Yes, one database can have many tables.
