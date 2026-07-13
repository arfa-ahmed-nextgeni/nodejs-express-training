# 58 - HAVING

## Objective

Understand how `HAVING` filters grouped results after using `GROUP BY`.

## What is HAVING?

`HAVING` is used to filter groups created by `GROUP BY`.

In simple words:

```txt
WHERE  = filters rows before grouping
HAVING = filters groups after grouping
```

## Basic Example

Suppose we count orders for each status:

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
GROUP BY status;
```

This may return:

```txt
completed  5
pending    2
cancelled  1
```

Now suppose we only want statuses that have at least 2 orders:

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
GROUP BY status
HAVING COUNT(*) >= 2;
```

## Why Not WHERE?

`WHERE` works before grouping.

This is not correct:

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
WHERE COUNT(*) >= 2
GROUP BY status;
```

The database has not calculated `COUNT(*)` yet when `WHERE` runs.

Use `HAVING` for aggregate results:

```sql
HAVING COUNT(*) >= 2
```

## WHERE and HAVING Together

We can use both in the same query.

Example:

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
WHERE total >= 200
GROUP BY status
HAVING COUNT(*) >= 2;
```

Meaning:

1. Keep only orders with total at least 200.
2. Group the remaining orders by status.
3. Keep only status groups with at least 2 orders.

## HAVING with SUM

```sql
SELECT user_id, SUM(total) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total) >= 500;
```

This returns users whose total order amount is at least 500.

## HAVING with AVG

```sql
SELECT category, AVG(price) AS average_price
FROM products
GROUP BY category
HAVING AVG(price) > 100;
```

This returns categories whose average product price is greater than 100.

## HAVING with COUNT and JOIN

```sql
SELECT users.name, COUNT(orders.id) AS total_orders
FROM users
INNER JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name
HAVING COUNT(orders.id) >= 2;
```

This returns users who have at least 2 orders.

## SQL Execution Order

A useful simplified order is:

```txt
FROM
JOIN
WHERE
GROUP BY
HAVING
SELECT
ORDER BY
LIMIT
```

This helps explain why `WHERE` cannot normally filter aggregate results.

## WHERE vs HAVING

```txt
WHERE  -> filters individual rows
HAVING -> filters grouped results
```

Example:

```sql
WHERE total >= 200
```

Filters individual order rows.

```sql
HAVING COUNT(*) >= 2
```

Filters grouped results.

## Summary

`HAVING` is used after `GROUP BY` to filter grouped results. Use `WHERE` for individual rows and `HAVING` for aggregate values such as `COUNT`, `SUM`, and `AVG`.

## Practice Questions

### Q1. What does HAVING filter?

It filters grouped results.

### Q2. What does WHERE filter?

It filters individual rows before grouping.

### Q3. Which clause should filter `COUNT(*) >= 2`?

`HAVING`.

### Q4. Can WHERE and HAVING be used together?

Yes.

### Q5. Does HAVING usually come before or after GROUP BY?

After `GROUP BY`.
