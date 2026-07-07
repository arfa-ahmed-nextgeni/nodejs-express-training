# 41 - Schemas

## Objective

Understand what a database schema is and why it is important.

## What is a Schema?

A schema defines the structure of data in a database.

In simple words:

```txt
Schema = design/structure of database data
```

It tells what tables exist, what columns exist, and what type of data each column can store.

## Example

For a users table, a schema may define:

```txt
id        number
name      text
email     text
password  text
created_at date/time
```

This means every user record should follow this structure.

## Why Schema is Important

Schema helps keep data organized and consistent.

Without a schema, data can become messy.

Example problem without clear schema:

```txt
One user has email field
Another user has user_email field
Another user has no email field
```

This makes the data hard to manage.

## Schema in SQL Databases

In SQL databases, schema usually includes:

- Tables
- Columns
- Data types
- Primary keys
- Foreign keys
- Constraints
- Relationships

Example:

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);
```

This SQL statement defines the schema for a `users` table.

## Schema in NoSQL Databases

NoSQL databases can be more flexible.

For example, MongoDB documents do not always need a strict schema by default.

But in real projects, we still usually define structure using code or validation.

Example:

```json
{
  "name": "Test User",
  "email": "user@example.com"
}
```

## Schema vs Table

A schema is the design or structure.

A table is where actual data is stored.

Example:

```txt
Schema says: users table should have id, name, email
Table stores: actual user records
```

## Real Project Example

For an eCommerce project, schema can define structures like:

```txt
users
products
orders
order_items
payments
addresses
```

Each table has its own columns and rules.

## Common Things Defined by Schema

A schema can define:

```txt
table names
column names
data types
required fields
unique fields
relationships
rules/constraints
```

## Summary

A schema is the structure of database data. It defines tables, columns, data types, keys, constraints, and relationships. A good schema helps keep data organized, consistent, and easier to query.

## Practice Questions

### Q1. What is a schema?

A schema is the structure or design of database data.

### Q2. What does schema define in SQL databases?

It defines tables, columns, data types, keys, constraints, and relationships.

### Q3. Why is schema important?

It keeps data organized and consistent.

### Q4. Is schema the same as table?

No. Schema is the design, and table stores actual data.

### Q5. Give one example of a table that can be part of a schema.

`users` table.
