# Task - JOINS

## Goal

Practice writing simple SQL JOIN examples using related tables.

## Online Tool

You can test these queries in:

```txt
https://runsql.com
```

## Database Setup

Before starting this task, run these files first:

```txt
database/schema.sql
database/seed.sql
```

Run `schema.sql` first to create the tables.

Run `seed.sql` after that to add sample data.

## Database Tables

This task uses these tables:

```txt
users
orders
products
order_items
```

## Database Schema Overview

```txt
Table users {
  id integer [primary key]
  name varchar(50)
  email varchar(100)
}

Table products {
  id integer [primary key]
  name varchar(100)
  price decimal(10, 2)
}

Table orders {
  id integer [primary key]
  user_id integer [foreign key -> users.id]
  total decimal(10, 2)
  status varchar(30)
}

Table order_items {
  id integer [primary key]
  order_id integer [foreign key -> orders.id]
  product_id integer [foreign key -> products.id]
  quantity integer
}
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

## Example Relation Hints

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
