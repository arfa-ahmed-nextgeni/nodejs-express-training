# 54 - AND and OR Conditions

## Objective

Understand how to combine multiple conditions in SQL using `AND` and `OR`.

## AND Condition

`AND` means all conditions must be true.

Example:

```sql
SELECT *
FROM products
WHERE price > 100 AND stock > 0;
```

This returns only products where:

```txt
price is greater than 100
AND
stock is greater than 0
```

If one condition is false, that row is not returned.

## OR Condition

`OR` means at least one condition must be true.

Example:

```sql
SELECT *
FROM orders
WHERE status = 'pending' OR status = 'processing';
```

This returns orders whose status is either:

```txt
pending
OR
processing
```

## Simple Difference

```txt
AND = every condition must match
OR  = any condition can match
```

## AND Example

```sql
SELECT *
FROM users
WHERE is_active = true AND city = 'Lahore';
```

This returns only active users from Lahore.

An active user from another city will not be returned.

An inactive user from Lahore will also not be returned.

## OR Example

```sql
SELECT *
FROM users
WHERE city = 'Lahore' OR city = 'Karachi';
```

This returns users from Lahore or Karachi.

## Combining AND and OR

When combining `AND` and `OR`, use parentheses to make the logic clear.

Example:

```sql
SELECT *
FROM products
WHERE (category = 'perfume' OR category = 'watch')
  AND stock > 0;
```

This means:

```txt
The product must be in stock
AND
its category must be perfume or watch
```

## Why Parentheses Matter

SQL normally checks `AND` before `OR`.

Without parentheses, a query may behave differently from what you expect.

Less clear:

```sql
WHERE category = 'perfume' OR category = 'watch' AND stock > 0
```

Clearer:

```sql
WHERE (category = 'perfume' OR category = 'watch') AND stock > 0
```

Use parentheses whenever conditions are mixed.

## Real Project Examples

Get completed orders with total greater than 200:

```sql
SELECT *
FROM orders
WHERE status = 'completed' AND total > 200;
```

Get pending or processing orders:

```sql
SELECT *
FROM orders
WHERE status = 'pending' OR status = 'processing';
```

Get active users from Lahore or Karachi:

```sql
SELECT *
FROM users
WHERE is_active = true
  AND (city = 'Lahore' OR city = 'Karachi');
```

## Summary

Use `AND` when every condition must be true. Use `OR` when at least one condition can be true. When both are used together, add parentheses to make the logic clear.

## Practice Questions

### Q1. What does `AND` mean?

All conditions must be true.

### Q2. What does `OR` mean?

At least one condition must be true.

### Q3. Why should we use parentheses with mixed conditions?

They make the intended logic clear and prevent unexpected results.

### Q4. Which condition should be used for active users from Lahore?

```sql
WHERE is_active = true AND city = 'Lahore'
```

### Q5. Which condition should be used for pending or processing orders?

```sql
WHERE status = 'pending' OR status = 'processing'
```
