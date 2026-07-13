# 56 - COUNT

## Objective

Understand how `COUNT` is used to count rows in a SQL table.

## What is COUNT?

`COUNT` is an aggregate function that returns the number of rows.

In simple words:

```txt
COUNT = how many records
```

## Count All Rows

```sql
SELECT COUNT(*) FROM users;
```

This returns the total number of rows in the `users` table.

## Use an Alias

An alias gives the result column a clear name.

```sql
SELECT COUNT(*) AS total_users
FROM users;
```

Result example:

```txt
total_users
3
```

## COUNT with WHERE

You can count only rows that match a condition.

```sql
SELECT COUNT(*) AS active_users
FROM users
WHERE is_active = true;
```

This counts only active users.

## COUNT a Column

```sql
SELECT COUNT(email) AS users_with_email
FROM users;
```

`COUNT(email)` counts only rows where `email` is not `NULL`.

## COUNT(*) vs COUNT(column)

```txt
COUNT(*)      -> counts all matching rows
COUNT(column) -> counts only non-NULL values in that column
```

## COUNT DISTINCT

`DISTINCT` counts unique values only.

```sql
SELECT COUNT(DISTINCT city) AS total_cities
FROM users;
```

If many users are from the same city, that city is counted only once.

## Real Project Examples

COUNT can be used for:

```txt
total users
total active users
total orders
total pending orders
total products in stock
```

Example:

```sql
SELECT COUNT(*) AS pending_orders
FROM orders
WHERE status = 'pending';
```

## Summary

`COUNT` returns the number of rows. `COUNT(*)` counts all matching rows, while `COUNT(column)` ignores `NULL` values. It can also be combined with `WHERE` and `DISTINCT`.

## Practice Questions

### Q1. What does COUNT do?

It returns the number of rows.

### Q2. What does COUNT(*) count?

All matching rows.

### Q3. Does COUNT(email) count NULL email values?

No.

### Q4. How can we count only active users?

Use `COUNT(*)` with a `WHERE` condition.

### Q5. What does COUNT(DISTINCT city) return?

The number of unique non-NULL city values.
