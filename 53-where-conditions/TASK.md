# Task - WHERE Conditions

## Goal

Practice filtering database rows using `WHERE` conditions.

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
  is_active boolean
}

Table products {
  id integer [primary key]
  name varchar(100)
  price integer
  stock integer
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

Create a file named:

```txt
where-queries.md
```

Write SQL queries for the following requirements.

## Required Practice

1. Get the user whose `id` is `1`.
2. Get all active users.
3. Get all products whose price is greater than `100`.
4. Get all products whose stock is less than or equal to `10`.
5. Get all completed orders.
6. Get all orders whose total is greater than or equal to `250`.
7. Get only the `name` and `email` of the user whose email is `user@example.com`.
8. Get all orders whose status is not `completed`.

## Requirements

Your file should demonstrate these operators:

```txt
=
!=
>
<=
>=
```

Add a short note under each query explaining what it returns.

## Important Note

`SELECT` decides which columns are displayed.

`WHERE` decides which rows are returned.

## Expected Learning

After completing this task, you should understand how to filter specific rows using SQL conditions.
