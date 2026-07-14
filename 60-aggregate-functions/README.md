# 60 - Aggregate Functions

## Objective

Understand how SQL aggregate functions calculate one result from multiple rows.

## What Is an Aggregate Function?

An aggregate function performs a calculation on a group of rows and returns one result.

In simple words:

```txt
Many rows -> one calculated value
```

Common aggregate functions are:

```txt
COUNT()
SUM()
AVG()
MIN()
MAX()
```

## COUNT()

`COUNT()` counts rows or non-null values.

```sql
SELECT COUNT(*) AS total_orders
FROM orders;
```

`COUNT(*)` counts all rows.

```sql
SELECT COUNT(email) AS users_with_email
FROM users;
```

`COUNT(email)` ignores rows where `email` is `NULL`.

## SUM()

`SUM()` adds numeric values.

```sql
SELECT SUM(total) AS total_revenue
FROM orders;
```

## AVG()

`AVG()` calculates the average of numeric values.

```sql
SELECT AVG(price) AS average_price
FROM products;
```

## MIN()

`MIN()` returns the smallest value.

```sql
SELECT MIN(price) AS lowest_price
FROM products;
```

## MAX()

`MAX()` returns the largest value.

```sql
SELECT MAX(price) AS highest_price
FROM products;
```

## Aggregate Functions with WHERE

`WHERE` filters rows before the aggregate calculation.

```sql
SELECT SUM(total) AS completed_revenue
FROM orders
WHERE status = 'completed';
```

SQL first keeps completed orders, then calculates their total.

## Aggregate Functions with GROUP BY

`GROUP BY` creates groups, and the aggregate function calculates one result for each group.

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
GROUP BY status;
```

This returns one count for each order status.

## Aggregate Functions with HAVING

`HAVING` filters the grouped results after aggregation.

```sql
SELECT user_id, SUM(total) AS order_total
FROM orders
GROUP BY user_id
HAVING SUM(total) >= 500;
```

## SQL Processing Idea

For this query:

```sql
SELECT status, SUM(total)
FROM orders
WHERE total >= 100
GROUP BY status
HAVING SUM(total) >= 500;
```

Think in this order:

```txt
1. FROM orders
2. WHERE filters rows
3. GROUP BY creates status groups
4. SUM calculates each group's total
5. HAVING filters the calculated groups
6. SELECT returns the result
```

## Real Project Examples

Aggregate functions can be used to calculate:

```txt
total number of users
total order revenue
average product price
lowest product price
highest order amount
orders count per user
revenue per order status
```

## Important Notes

- Aggregate functions usually return one row when `GROUP BY` is not used.
- With `GROUP BY`, they return one result for each group.
- Most aggregate functions ignore `NULL` values.
- `COUNT(*)` counts rows even if some columns contain `NULL`.
- Use `WHERE` before grouping and `HAVING` after grouping.

## Summary

Aggregate functions calculate results from multiple rows. `COUNT()` counts, `SUM()` adds, `AVG()` calculates an average, `MIN()` finds the smallest value, and `MAX()` finds the largest value. They are commonly combined with `WHERE`, `GROUP BY`, and `HAVING`.

## Practice Questions

### Q1. Which function counts rows?

`COUNT()`.

### Q2. Which function adds numeric values?

`SUM()`.

### Q3. Which function calculates an average?

`AVG()`.

### Q4. What is the difference between `WHERE` and `HAVING`?

`WHERE` filters rows before grouping, while `HAVING` filters grouped results after aggregation.

### Q5. What does `COUNT(email)` do with null emails?

It ignores rows where `email` is `NULL`.
