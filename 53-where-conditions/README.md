# 53 - WHERE Conditions

## Objective

Understand how the `WHERE` clause filters rows in SQL queries.

## What is WHERE?

`WHERE` is used to return only rows that match a condition.

In simple words:

```txt
WHERE = filter database rows
```

Without `WHERE`, a query usually checks all rows in the table.

## Basic Example

```sql
SELECT *
FROM users
WHERE id = 1;
```

This returns only the user whose `id` is `1`.

## Text Condition

```sql
SELECT *
FROM orders
WHERE status = 'completed';
```

Text values are usually written inside single quotes.

## Comparison Operators

Common operators used with `WHERE` are:

```txt
=   equal to
!=  not equal to
>   greater than
<   less than
>=  greater than or equal to
<=  less than or equal to
```

## Equal To

```sql
SELECT *
FROM products
WHERE price = 100;
```

This returns products whose price is exactly `100`.

## Not Equal To

```sql
SELECT *
FROM orders
WHERE status != 'completed';
```

This returns orders whose status is not `completed`.

## Greater Than

```sql
SELECT *
FROM products
WHERE price > 100;
```

This returns products with a price greater than `100`.

## Less Than

```sql
SELECT *
FROM products
WHERE price < 200;
```

This returns products with a price less than `200`.

## Greater Than or Equal To

```sql
SELECT *
FROM orders
WHERE total >= 250;
```

This includes orders whose total is exactly `250` or more.

## Less Than or Equal To

```sql
SELECT *
FROM products
WHERE price <= 100;
```

This includes products whose price is exactly `100` or less.

## WHERE with Selected Columns

You do not need to return every column.

```sql
SELECT name, email
FROM users
WHERE id = 1;
```

The `WHERE` clause decides which rows are returned. The `SELECT` clause decides which columns are shown.

## WHERE with UPDATE

A condition can target the row that should be changed.

```sql
UPDATE users
SET name = 'Updated User'
WHERE id = 1;
```

This changes only the user whose `id` is `1`.

## Important Safety Rule

Be careful when changing or removing data.

A missing condition may affect more rows than expected.

Before running a change query, first test the same condition with `SELECT`.

Example:

```sql
SELECT *
FROM users
WHERE id = 1;
```

After confirming the correct row, use the condition in the change query.

## Real Project Examples

In an eCommerce app, `WHERE` can be used to:

```txt
get one product by id
get completed orders
get products above a price
get a user by email
get one cart item
```

## Summary

`WHERE` filters rows using a condition. It works with operators such as `=`, `!=`, `>`, `<`, `>=`, and `<=`. `SELECT` controls which columns are displayed, while `WHERE` controls which rows are included.

## Practice Questions

### Q1. What does `WHERE` do?

It filters rows based on a condition.

### Q2. Which operator means equal to?

`=`.

### Q3. Which operator means greater than or equal to?

`>=`.

### Q4. How are text values usually written in SQL?

Inside single quotes.

### Q5. What is a safe step before running an update query?

Test the same condition using a `SELECT` query first.
