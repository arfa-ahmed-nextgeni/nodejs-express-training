# Task - JOINS

## Goal

Practice writing simple SQL JOIN examples using related tables.

## Online Tool

Use this online tool for practice:

```txt
https://runsql.com/r
```

## Database Schema

First, paste this DBML schema into runsql.com:

```dbml
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table users {
  id integer [primary key]
  name varchar(50)
  email varchar(100)
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
  price integer
}

Table order_items {
  id integer [primary key]
  order_id integer
  product_id integer
  quantity integer
}

Ref: orders.user_id > users.id
Ref: order_items.order_id > orders.id
Ref: order_items.product_id > products.id
```

## Tables Used

This task uses these tables:

```txt
users
orders
products
order_items
```

## Instructions

Create a file named:

```txt
join-queries.md
```

Inside this file, write SQL examples for joins.

## Required Practice

Write examples for:

```txt
1. Get orders with user names
2. Get all users with their orders if available
3. Get order items with product names
```

## Relation Hints

Use these relations:

```txt
orders.user_id = users.id
order_items.order_id = orders.id
order_items.product_id = products.id
```

## Requirements

Your file should include:

- one INNER JOIN example
- one LEFT JOIN example
- one JOIN between order_items and products
- a short note under each query explaining what it returns

## Expected Learning

After this task, you should understand how to get related data from multiple tables using JOIN.
