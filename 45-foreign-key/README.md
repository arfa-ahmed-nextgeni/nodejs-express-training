# 45 - Foreign Key

## Objective

Understand what a foreign key is and how it connects tables in a SQL database.

## What is a Foreign Key?

A foreign key is a column in one table that refers to the primary key of another table.

In simple words:

```txt
Foreign Key = link between two tables
```

## Example

We have two tables:

```txt
users
orders
```

A user can have many orders.

The `users` table:

```txt
id | name
1  | Test User
2  | Demo User
```

The `orders` table:

```txt
id | user_id | total
1  | 1       | 100
2  | 1       | 250
3  | 2       | 80
```

Here, `orders.user_id` is a foreign key.

It refers to `users.id`.

## Why Foreign Key is Needed

A foreign key helps create a relationship between tables.

Example:

```txt
Order belongs to a user.
```

Instead of storing full user data inside every order, we store only `user_id`.

This keeps data clean and avoids duplication.

## Primary Key vs Foreign Key

Primary key uniquely identifies a row in its own table.

Foreign key points to a primary key in another table.

Example:

```txt
users.id       -> primary key
orders.user_id -> foreign key
```

## SQL Example

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  total DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Here:

```txt
orders.user_id references users.id
```

## Real Project Example

In an eCommerce app:

```txt
orders.user_id -> users.id
order_items.order_id -> orders.id
order_items.product_id -> products.id
payments.order_id -> orders.id
addresses.user_id -> users.id
```

These foreign keys connect related data.

## Benefits of Foreign Key

Foreign keys help with:

- Connecting related tables
- Avoiding duplicate data
- Maintaining data consistency
- Understanding relationships
- Protecting against invalid references

## Invalid Reference Example

If `orders.user_id = 10`, but there is no user with `id = 10`, then the order points to a user that does not exist.

A foreign key can prevent this problem.

## Summary

A foreign key connects one table to another table. It usually points to the primary key of another table. Foreign keys are used to create relationships like user to orders, order to order items, and product to order items.

## Practice Questions

### Q1. What is a foreign key?

A foreign key is a column that refers to the primary key of another table.

### Q2. What is the main purpose of a foreign key?

To create a relationship between two tables.

### Q3. In `orders.user_id`, what table can `user_id` refer to?

It can refer to `users.id`.

### Q4. What is the difference between primary key and foreign key?

Primary key identifies a row in its own table. Foreign key links to a row in another table.

### Q5. Give one real project example of a foreign key.

`orders.user_id` referencing `users.id`.
