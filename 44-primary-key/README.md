# 44 - Primary Key

## Objective

Understand what a primary key is and why it is important in a SQL database table.

## What is a Primary Key?

A primary key is a column that uniquely identifies each row in a table.

In simple words:

```txt
Primary Key = unique ID for each record
```

Example users table:

```txt
id | name      | email
1  | Test User | user@example.com
2  | Demo User | demo@example.com
```

Here, `id` can be the primary key because each user has a unique `id`.

## Why Primary Key is Needed

A primary key helps us find one exact record from a table.

Example:

```txt
Get user with id = 1
```

This should return only one user.

## Primary Key Rules

A primary key should be:

```txt
unique
not null
stable
```

This means:

- Two rows cannot have the same primary key value
- Primary key value cannot be empty
- It should not change often

## Example SQL

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);
```

Here, `id` is the primary key.

## Auto Increment Primary Key

In many SQL databases, primary key values can be auto-generated.

Example:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);
```

This means the database automatically generates the next `id` value.

## Real Project Example

In an eCommerce app:

```txt
users table -> user id
products table -> product id
orders table -> order id
payments table -> payment id
```

Each table usually has its own primary key.

## Primary Key vs Unique Key

A primary key uniquely identifies the main record in a table.

A unique key also prevents duplicate values, but it is not always the main identifier.

Example:

```txt
id    -> primary key
email -> unique key
```

A user has one main `id`, but email can also be unique.

## Can a Table Have More Than One Primary Key?

A table can have only one primary key.

But that primary key can be made from more than one column. This is called a composite primary key.

Example:

```txt
order_id + product_id
```

This can be used in an `order_items` table.

## Summary

A primary key is used to uniquely identify each row in a table. It should be unique and not null. Most tables have an `id` column as the primary key. Primary keys help us find, update, and delete exact records.

## Practice Questions

### Q1. What is a primary key?

A primary key is a column that uniquely identifies each row in a table.

### Q2. Can a primary key be null?

No, a primary key cannot be null.

### Q3. Can two rows have the same primary key value?

No, primary key values must be unique.

### Q4. Give one common primary key column name.

`id`.

### Q5. Can a table have more than one primary key?

A table can have only one primary key, but it can be made from multiple columns.
