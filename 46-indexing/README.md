# 46 - Indexing

## Objective

Understand what indexing is in a SQL database and why it improves query performance.

## What is Indexing?

Indexing is a way to make database searching faster.

In simple words:

```txt
Index = shortcut for finding data quickly
```

Without an index, the database may need to scan many rows to find the required data.

With an index, the database can find data faster.

## Simple Example

Think about a book.

If you want to find a topic, you can check the index page instead of reading the whole book.

Database index works in a similar way.

## Why Indexing is Needed

When a table has few rows, searching is usually fast.

But when a table has thousands or millions of rows, searching can become slow.

Indexing helps improve query speed.

## Example Table

```txt
users
```

Columns:

```txt
id
name
email
created_at
```

If we often search users by email:

```sql
SELECT * FROM users WHERE email = 'user@example.com';
```

Then creating an index on `email` can make this query faster.

## SQL Example

```sql
CREATE INDEX idx_users_email ON users(email);
```

This creates an index on the `email` column of the `users` table.

## Common Columns for Indexing

We usually add indexes on columns that are frequently used in:

```txt
WHERE conditions
JOIN conditions
ORDER BY
GROUP BY
search filters
```

Examples:

```txt
email
user_id
order_id
product_id
created_at
status
```

## Primary Key and Index

A primary key usually creates an index automatically.

Example:

```sql
id INT PRIMARY KEY
```

The database can quickly find a row by primary key.

## Unique Index

A unique index improves search and also prevents duplicate values.

Example:

```sql
CREATE UNIQUE INDEX idx_users_email ON users(email);
```

This means two users cannot have the same email.

## Indexing Benefit

Main benefit:

```txt
faster read/search queries
```

Example:

```txt
Find user by email
Find orders by user_id
Find products by category_id
```

## Indexing Cost

Indexes are useful, but they also have some cost.

Indexes can:

- Use extra storage
- Make insert/update/delete operations slightly slower
- Need maintenance by the database

So we should not add indexes blindly on every column.

## Real Project Example

In an eCommerce app, useful indexes can be:

```txt
users.email
orders.user_id
orders.status
order_items.order_id
products.sku
products.category_id
payments.order_id
```

These indexes help APIs fetch data faster.

## When Not to Add Index

Avoid unnecessary indexes on columns that are:

- Rarely searched
- Very small tables
- Frequently updated but rarely read
- Not useful in filtering, joining, or sorting

## Summary

Indexing helps databases find data faster. It is useful for columns used in searching, joining, sorting, and filtering. Indexes improve read performance but can use extra storage and slightly slow down writes. Good indexing improves API and database performance.

## Practice Questions

### Q1. What is indexing?

Indexing is a way to make database searching faster.

### Q2. What is the main benefit of an index?

Faster read/search queries.

### Q3. Should we add indexes on every column?

No. Indexes should be added only where they are useful.

### Q4. Which type of columns are common for indexing?

Columns used in WHERE, JOIN, ORDER BY, and GROUP BY.

### Q5. Give one real project index example.

`users.email` or `orders.user_id`.
