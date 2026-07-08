# Task - JOINS

## Goal

Practice writing simple SQL JOIN examples using related tables.

## Instructions

Create a file named:

```txt
join-queries.md
```

Inside this file, write SQL examples for joins.

## Example Tables

Use these example tables:

```txt
users
orders
products
order_items
```

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
