# Task - COUNT

## Goal

Practice counting database rows with `COUNT`.

## Online Tool

Use:

```txt
https://runsql.com/r
```

## Database Schema

Paste this DBML schema into runsql.com:

```dbml
Table users {
  id integer [primary key]
  name varchar(50)
  email varchar(100)
  city varchar(50)
  is_active boolean
}

Table products {
  id integer [primary key]
  name varchar(100)
  price integer
  stock integer
  category varchar(50)
}

Table orders {
  id integer [primary key]
  user_id integer
  total integer
  status varchar(30)
}

Ref: orders.user_id > users.id
```

## Instructions

Create this file:

```txt
count-queries.md
```

Write SQL queries for the following:

1. Count all users.
2. Count all active users.
3. Count products whose stock is greater than `0`.
4. Count pending orders.
5. Count users whose email is not `NULL` using `COUNT(email)`.
6. Count the number of unique cities using `COUNT(DISTINCT city)`.
7. Count completed orders whose total is greater than or equal to `250`.

## Requirements

- Use a clear alias for every result.
- Use `COUNT(*)` when counting rows.
- Use `COUNT(column)` for the email task.
- Use `WHERE` where a condition is required.
- Add a semicolon at the end of each query.

## Expected Learning

After this task, you should understand `COUNT(*)`, `COUNT(column)`, `COUNT(DISTINCT column)`, and `COUNT` with `WHERE`.
