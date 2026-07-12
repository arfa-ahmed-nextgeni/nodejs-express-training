# 52 - Basic SQL Functions

## Objective

Understand basic SQL functions used to format, calculate, and handle database values.

## What is an SQL Function?

An SQL function takes a value, performs some operation, and returns a result.

In simple words:

```txt
SQL function = input value -> operation -> output value
```

Example:

```sql
SELECT UPPER(name) FROM users;
```

If the name is:

```txt
Test User
```

The result becomes:

```txt
TEST USER
```

## Important Point

A function usually changes only the query result.

It does not permanently change the saved table data unless it is used inside an update operation.

## UPPER

`UPPER()` converts text to uppercase.

```sql
SELECT UPPER(name) AS uppercase_name
FROM users;
```

Example result:

```txt
TEST USER
```

## LOWER

`LOWER()` converts text to lowercase.

```sql
SELECT LOWER(email) AS lowercase_email
FROM users;
```

Example result:

```txt
user@example.com
```

## LENGTH

`LENGTH()` returns the length of a text value.

```sql
SELECT name, LENGTH(name) AS name_length
FROM users;
```

Example:

```txt
Test User -> 9
```

The exact behavior for special characters can vary between database systems.

## CONCAT

`CONCAT()` combines multiple text values.

```sql
SELECT CONCAT(name, ' - ', email) AS user_details
FROM users;
```

Example result:

```txt
Test User - user@example.com
```

## ROUND

`ROUND()` rounds a number.

```sql
SELECT name, ROUND(price) AS rounded_price
FROM products;
```

Example:

```txt
99.75 -> 100
```

You can also provide decimal places:

```sql
SELECT ROUND(price, 1)
FROM products;
```

## COALESCE

`COALESCE()` returns the first value that is not `NULL`.

```sql
SELECT name, COALESCE(email, 'No email') AS email
FROM users;
```

If email is `NULL`, the result will show:

```txt
No email
```

## COUNT

`COUNT()` counts rows.

```sql
SELECT COUNT(*) AS total_users
FROM users;
```

`COUNT` has its own topic later, so we will study it in more detail there.

## Functions with Column Aliases

We commonly use `AS` to give a clear name to the returned column.

Example:

```sql
SELECT UPPER(name) AS uppercase_name
FROM users;
```

Without an alias, the database may return a less readable column name.

## Multiple Functions in One Query

You can use multiple functions together.

```sql
SELECT
  UPPER(name) AS uppercase_name,
  LOWER(email) AS lowercase_email,
  LENGTH(name) AS name_length
FROM users;
```

## Real Project Examples

SQL functions can be used to:

```txt
format names
normalize email output
combine first and last names
round prices
replace NULL values
count records
```

## Database Differences

Function names and behavior can be slightly different between MySQL, PostgreSQL, SQLite, and other databases.

Always check the documentation for the database used by the project.

## Summary

SQL functions perform operations on values and return results. Common functions include `UPPER`, `LOWER`, `LENGTH`, `CONCAT`, `ROUND`, and `COALESCE`. Functions are often used with aliases to make query results easier to understand.

## Practice Questions

### Q1. What does `UPPER()` do?

It converts text to uppercase.

### Q2. What does `LOWER()` do?

It converts text to lowercase.

### Q3. What does `LENGTH()` return?

It returns the length of a text value.

### Q4. What does `CONCAT()` do?

It combines multiple text values.

### Q5. What does `COALESCE()` do?

It returns the first value that is not `NULL`.

### Q6. Why do we use `AS`?

We use it to give a readable alias to a returned column.
