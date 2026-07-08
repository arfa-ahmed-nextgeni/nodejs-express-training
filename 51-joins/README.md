# 51 - JOINS

## Objective

Understand how SQL joins are used to get related data from multiple tables.

## What is a JOIN?

A JOIN is used to combine data from two or more related tables.

In simple words:

```txt
JOIN = get connected data from multiple tables
```

## Why JOINS Are Needed

In a good database design, data is split into multiple tables.

Example:

```txt
users
orders
products
order_items
```

If we want order data with user information, we need to connect the `orders` table with the `users` table.

That is where JOIN is useful.

## Example Tables

Users table:

```txt
id | name
1  | Test User
2  | Demo User
```

Orders table:

```txt
id | user_id | total
1  | 1       | 100
2  | 1       | 250
3  | 2       | 80
```

Here:

```txt
orders.user_id connects with users.id
```

## INNER JOIN

`INNER JOIN` returns only matching records from both tables.

Example:

```sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

This returns users who have matching orders.

## LEFT JOIN

`LEFT JOIN` returns all records from the left table and matching records from the right table.

Example:

```sql
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

This returns all users, even if some users do not have orders.

## RIGHT JOIN

`RIGHT JOIN` returns all records from the right table and matching records from the left table.

Example:

```sql
SELECT users.name, orders.total
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

This is less commonly used in many projects because the same result can often be achieved by changing table order and using `LEFT JOIN`.

## FULL JOIN

`FULL JOIN` returns records when there is a match in either table.

Not all databases support `FULL JOIN` directly.

For example, MySQL does not support `FULL OUTER JOIN` directly.

## JOIN Condition

The join condition is written using `ON`.

Example:

```sql
ON users.id = orders.user_id
```

This tells the database how the two tables are connected.

## Real Project Examples

In an eCommerce app, joins are used to get:

```txt
orders with user details
order items with product details
payments with order details
addresses with user details
```

Example relation:

```txt
orders.user_id -> users.id
order_items.order_id -> orders.id
order_items.product_id -> products.id
```

## Common JOIN Types

```txt
INNER JOIN -> only matching records
LEFT JOIN  -> all records from left table and matching records from right table
RIGHT JOIN -> all records from right table and matching records from left table
FULL JOIN  -> records from both sides where possible
```

## Summary

JOIN is used to get related data from multiple tables. It is very important in SQL because normalized databases store data in separate tables. The most common joins are `INNER JOIN` and `LEFT JOIN`.

## Practice Questions

### Q1. What is a JOIN?

A JOIN is used to combine related data from multiple tables.

### Q2. Why do we need joins?

Because related data is often stored in separate tables.

### Q3. Which join returns only matching records?

`INNER JOIN`.

### Q4. Which join returns all records from the left table?

`LEFT JOIN`.

### Q5. What is the purpose of `ON` in a join?

It defines how two tables are connected.
