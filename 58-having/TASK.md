# Task - HAVING

## Goal

Practice filtering grouped SQL results using `HAVING`.

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
  city varchar(50)
}

Table orders {
  id integer [primary key]
  user_id integer
  total integer
  status varchar(30)
}

Table products {
  id integer [primary key]
  name varchar(100)
  category varchar(50)
  price integer
}

Ref: orders.user_id > users.id
```

## Instructions

Create a file named:

```txt
having-queries.md
```

Write SQL queries for the following tasks.

## Required Practice

1. Count orders for each status and return only statuses with at least 2 orders.
2. Calculate total order amount for each user and return only users whose total is at least 500.
3. Calculate average product price for each category and return only categories whose average price is greater than 100.
4. Count users in each city and return only cities with more than 2 users.
5. Count orders for each user and return only users with at least 2 orders.
6. First filter orders whose total is at least 200, then group by status, and return only groups with at least 2 orders.
7. Join users and orders, then return user names only when they have at least 2 orders.

## Requirements

Your file should include:

- `GROUP BY`
- `HAVING COUNT(...)`
- `HAVING SUM(...)`
- `HAVING AVG(...)`
- one query using both `WHERE` and `HAVING`
- one query using JOIN, GROUP BY, and HAVING

## Reminder

```txt
WHERE  = filters rows before GROUP BY
HAVING = filters groups after GROUP BY
```

## Expected Learning

After this task, you should understand when to use `WHERE` and when to use `HAVING`.
