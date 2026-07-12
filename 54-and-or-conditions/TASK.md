# Task - AND and OR Conditions

## Goal

Practice combining multiple SQL conditions using `AND` and `OR`.

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
  category varchar(50)
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
and-or-queries.md
```

Write SQL queries for the following tasks.

## Required Practice

1. Get all active users from Lahore.
2. Get products whose price is greater than 100 and stock is greater than 0.
3. Get orders whose status is either `pending` or `processing`.
4. Get users who are from Lahore or Karachi.
5. Get completed orders whose total is greater than or equal to 250.
6. Get products that are in the `perfume` or `watch` category and have stock greater than 0.
7. Get inactive users who are from Lahore or Karachi.

## Requirements

Your file should include:

- at least three `AND` examples
- at least two `OR` examples
- at least two examples combining `AND` and `OR`
- parentheses where `AND` and `OR` are mixed
- a short note under each query explaining the result

## Important Reminder

```txt
AND = every condition must match
OR  = at least one condition must match
```

When both are used together, use parentheses to make the intended logic clear.

## Expected Learning

After this task, you should be able to combine multiple SQL conditions correctly using `AND`, `OR`, and parentheses.
