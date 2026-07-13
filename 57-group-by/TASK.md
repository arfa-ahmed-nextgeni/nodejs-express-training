# Task - GROUP BY

## Goal

Practice grouping related rows and calculating one result for each group.

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
  status varchar(30)
  total integer
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
group-by-queries.md
```

Write SQL queries for the following requirements.

## Required Practice

1. Count users in each city.
2. Count orders for each status.
3. Calculate the total order amount for each status.
4. Calculate the average product price for each category.
5. Get the minimum and maximum product price for each category.
6. Count orders for each `user_id`.
7. Count orders for each user name by joining `users` and `orders`.
8. Count orders for each status where the order total is at least `200`.

## Requirements

Your answers should demonstrate:

- `GROUP BY` with `COUNT()`
- `GROUP BY` with `SUM()`
- `GROUP BY` with `AVG()`
- `GROUP BY` with `MIN()` and `MAX()`
- `WHERE` before `GROUP BY`
- `GROUP BY` with a JOIN
- clear aliases for calculated columns

## Important Hint

Normal columns in `SELECT` should normally also appear in `GROUP BY`.

Example structure:

```sql
SELECT status, COUNT(*) AS total_orders
FROM orders
GROUP BY status;
```

Do not copy this example as one of your answers without understanding it.

## Expected Learning

After completing this task, you should understand that `GROUP BY` creates one result row for each distinct group.
