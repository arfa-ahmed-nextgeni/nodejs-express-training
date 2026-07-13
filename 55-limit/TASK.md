# Task - LIMIT

## Goal

Practice limiting SQL query results and using offset for pagination.

## Online Tool

Use:

```txt
https://runsql.com/r
```

## Database Schema

Paste this DBML schema into runsql.com:

```dbml
Table products {
  id integer [primary key]
  name varchar(100)
  price integer
  stock integer
  category varchar(50)
}

Table orders {
  id integer [primary key]
  total integer
  status varchar(30)
}
```

## Instructions

Create a file named:

```txt
limit-queries.md
```

Write SQL queries for the following tasks.

## Required Practice

1. Get only the first 5 products.
2. Get only 3 products that have stock greater than 0.
3. Get the 2 most expensive products.
4. Get the first 5 orders sorted by highest id first.
5. Skip the first 5 products and return the next 5 products.
6. Write a query for page 3 when the page size is 10.

## Requirements

Your file should include:

- `LIMIT`
- `LIMIT` with `WHERE`
- `LIMIT` with `ORDER BY`
- `LIMIT` with `OFFSET`
- a short note explaining the pagination query

## Hint

For page 3 with page size 10:

```txt
OFFSET = (3 - 1) × 10
```

## Expected Learning

After this task, you should understand how to control result size and implement basic SQL pagination.
