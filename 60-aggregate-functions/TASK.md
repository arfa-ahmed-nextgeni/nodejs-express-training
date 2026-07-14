# Task - Aggregate Functions

## Goal

Practice `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` with filtering and grouping.

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
aggregate-queries.md
```

Write one SQL query for each requirement below.

## Required Practice

1. Count all products.
2. Calculate the total stock of all products.
3. Calculate the average product price.
4. Get the lowest and highest product prices in one query.
5. Calculate the total amount of completed orders.
6. Calculate the average order total for each status.
7. Count products in each category.
8. Return only categories whose average product price is greater than 100.
9. Count orders for each user name by joining `users` and `orders`.
10. Return only users whose combined order total is at least 500.

## Requirements

Your answers should demonstrate:

```txt
COUNT()
SUM()
AVG()
MIN()
MAX()
WHERE
GROUP BY
HAVING
JOIN
```

Add a short note under each query explaining what it returns.

## Expected Learning

After this task, you should be able to choose the correct aggregate function and combine it with filtering, grouping, and joins.
