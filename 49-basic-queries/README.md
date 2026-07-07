# 49 - Basic Queries

## Objective

Understand basic SQL queries used to interact with database tables.

## What is a Query?

A query is an instruction sent to the database.

In simple words:

```txt
Query = instruction for database
```

We use queries to create, read, update, and manage data.

## Common Basic Query Operations

The most common database operations are:

```txt
Create data
Read data
Update data
Remove data
```

These are also called CRUD operations.

## CRUD Meaning

CRUD means:

```txt
Create
Read
Update
Remove
```

## Read Query

A read query is used to get data from a table.

Example:

```sql
SELECT * FROM users;
```

This means:

```txt
Get all columns from users table
```

Example with specific columns:

```sql
SELECT id, name, email FROM users;
```

## Create Query

A create query is used to add new data into a table.

Example:

```sql
INSERT INTO users (name, email)
VALUES ('Test User', 'user@example.com');
```

This adds one new user.

## Update Query

An update query is used to modify existing data.

Example:

```sql
UPDATE users
SET name = 'Updated User'
WHERE id = 1;
```

This updates the user whose id is `1`.

## Remove Query

A remove query is used to remove existing rows from a table.

Important point:

```txt
Always use a proper condition when removing specific rows.
```

The condition is usually written using `WHERE`.

## Important Note About WHERE

`WHERE` is very important with update and remove operations.

Without `WHERE`, a query can affect more rows than expected.

`WHERE` helps target specific rows.

## Real Project Example

In an eCommerce app, basic queries can be used for:

```txt
read product list
create new order
update product stock
remove cart item
```

## Summary

Basic queries are used to create, read, update, and manage data. Read queries get data, create queries add data, update queries modify data, and remove queries remove data. `WHERE` is important to target specific rows.

## Practice Questions

### Q1. What is a query?

A query is an instruction sent to the database.

### Q2. Which operation is used to read data?

Read operation.

### Q3. Which operation is used to add data?

Create operation.

### Q4. Which operation is used to modify data?

Update operation.

### Q5. Why is `WHERE` important?

It helps target specific rows and prevents changing more data than expected.
