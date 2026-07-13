# 57 - GROUP BY

## Objective

Understand how `GROUP BY` combines rows that have the same value and lets us calculate a result for each group.

## What is GROUP BY?

`GROUP BY` creates groups from rows that share the same value.

In simple words:

```txt
GROUP BY = make separate groups, then calculate something for each group
```

It is commonly used with aggregate functions such as:

```txt
COUNT()
SUM()
AVG()
MIN()
MAX()
```

## Example Data

Orders table:

```txt
id | status     | total
1  | completed  | 300
2  | pending    | 150
3  | completed  | 200
4  | pending    | 100
```

## Count Orders by Status

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
GROUP BY status;
```

Result:

```txt
status     | total_orders
completed  | 2
pending    | 2
```

SQL first creates a `completed` group and a `pending` group. It then counts the rows in each group.

## Sum Order Totals by Status

```sql
SELECT status, SUM(total) AS total_amount
FROM orders
GROUP BY status;
```

Result:

```txt
status     | total_amount
completed  | 500
pending    | 250
```

## Group Users by City

```sql
SELECT city, COUNT(*) AS total_users
FROM users
GROUP BY city;
```

This returns one row for each city and the number of users in that city.

## Important Rule

When using `GROUP BY`, selected columns normally need to be either:

- included in `GROUP BY`, or
- used inside an aggregate function

Correct:

```sql
SELECT status, COUNT(*)
FROM orders
GROUP BY status;
```

Incorrect or unreliable:

```sql
SELECT id, status, COUNT(*)
FROM orders
GROUP BY status;
```

`id` is not grouped and is not inside an aggregate function.

## WHERE with GROUP BY

`WHERE` filters individual rows before grouping.

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
WHERE total >= 200
GROUP BY status;
```

Order of processing in simple words:

```txt
1. Filter rows with WHERE
2. Create groups with GROUP BY
3. Calculate COUNT, SUM, AVG, etc.
```

## GROUP BY with JOIN

Example: count orders for each user.

```sql
SELECT users.name, COUNT(orders.id) AS total_orders
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name;
```

`LEFT JOIN` keeps users who have no orders. For those users, `COUNT(orders.id)` returns `0`.

## Real Project Examples

```txt
Count orders by status
Count users by city
Calculate sales by category
Calculate average product price by category
Count orders for each user
```

## Summary

`GROUP BY` combines rows with the same value into groups. Aggregate functions then calculate a result for each group. `WHERE` filters rows before grouping.

## Practice Questions

### Q1. What does GROUP BY do?

It creates groups from rows that have the same value.

### Q2. Which functions are commonly used with GROUP BY?

`COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.

### Q3. Does WHERE run before or after grouping?

Before grouping.

### Q4. How can we count orders for each status?

Group rows by `status` and use `COUNT(*)`.

### Q5. Why should a normal selected column be included in GROUP BY?

Because SQL needs one clear value for that column in each result group.
