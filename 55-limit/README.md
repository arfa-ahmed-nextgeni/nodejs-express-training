# 55 - LIMIT

## Objective

Understand how `LIMIT` controls how many rows a SQL query returns.

## What is LIMIT?

`LIMIT` is used to return only a specific number of rows.

In simple words:

```txt
LIMIT = maximum number of rows to return
```

## Basic Syntax

```sql
SELECT * FROM users
LIMIT 5;
```

This returns at most 5 users.

## Why LIMIT is Useful

`LIMIT` is useful when:

- A table has many rows
- We only need a few results
- We are testing a query
- We are building pagination
- We want top or recent records

## LIMIT with WHERE

```sql
SELECT * FROM products
WHERE stock > 0
LIMIT 3;
```

This returns at most 3 products that are in stock.

## LIMIT with ORDER BY

`LIMIT` is commonly used with `ORDER BY`.

```sql
SELECT * FROM products
ORDER BY price DESC
LIMIT 3;
```

This returns the 3 most expensive products.

Without `ORDER BY`, the database does not guarantee which rows will appear first.

## LIMIT with OFFSET

`OFFSET` skips some rows before returning results.

```sql
SELECT * FROM products
LIMIT 3 OFFSET 3;
```

This means:

```txt
Skip first 3 rows
Return next 3 rows
```

This is useful for pagination.

## Pagination Example

Page size is 5.

```txt
Page 1 -> LIMIT 5 OFFSET 0
Page 2 -> LIMIT 5 OFFSET 5
Page 3 -> LIMIT 5 OFFSET 10
```

Formula:

```txt
OFFSET = (page - 1) × page size
```

## Real Project Example

In an eCommerce project, `LIMIT` can be used for:

```txt
latest 10 orders
top 5 products
first 20 search results
paginated customer list
```

## Important Note

Use `ORDER BY` when the result order matters.

Example:

```sql
SELECT * FROM orders
ORDER BY id DESC
LIMIT 10;
```

This returns the latest 10 orders when higher ids represent newer orders.

## Summary

`LIMIT` controls the maximum number of rows returned by a query. It is often combined with `WHERE`, `ORDER BY`, and `OFFSET`. It is commonly used for testing, top results, and pagination.

## Practice Questions

### Q1. What does `LIMIT 5` do?

It returns at most 5 rows.

### Q2. Why is `ORDER BY` useful with LIMIT?

It controls which rows are returned first.

### Q3. What does OFFSET do?

It skips rows before returning results.

### Q4. What is the offset for page 3 with page size 10?

20.

### Q5. Is LIMIT useful for pagination?

Yes.
