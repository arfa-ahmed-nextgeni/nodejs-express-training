# 48 - Normalization

## Objective

Understand what database normalization is and why it is used in SQL database design.

## What is Normalization?

Normalization is a process of organizing database tables properly.

In simple words:

```txt
Normalization = organize data to reduce duplication and improve consistency
```

It helps us design clean tables.

## Why Normalization is Needed

Without normalization, the same data may be repeated in many places.

Example bad table:

```txt
order_id | user_name | user_email       | product_name | price
1        | Test User | user@example.com | Product A    | 100
2        | Test User | user@example.com | Product B    | 250
```

Here, user data is repeated in every order row.

This can cause problems.

## Problems Without Normalization

Repeated data can create issues like:

- Duplicate data
- More storage usage
- Harder updates
- Inconsistent data
- More chance of mistakes

Example:

If user email changes, we may need to update it in many rows.

If we miss one row, data becomes inconsistent.

## Normalized Design Example

Instead of storing all data in one table, we split it into related tables.

Example:

```txt
users
orders
products
order_items
```

Users table:

```txt
id | name      | email
1  | Test User | user@example.com
```

Orders table:

```txt
id | user_id | total
1  | 1       | 350
```

Products table:

```txt
id | name      | price
1  | Product A | 100
2  | Product B | 250
```

Order items table:

```txt
id | order_id | product_id | quantity
1  | 1        | 1          | 1
2  | 1        | 2          | 1
```

Now data is organized and duplication is reduced.

## Benefits of Normalization

Normalization helps with:

- Reducing duplicate data
- Improving data consistency
- Making updates easier
- Making database design cleaner
- Avoiding unnecessary repeated values

## First Normal Form - 1NF

1NF means each column should contain one value only.

Bad example:

```txt
user_id | phone_numbers
1       | 111, 222, 333
```

Better example:

```txt
user_id | phone_number
1       | 111
1       | 222
1       | 333
```

## Second Normal Form - 2NF

2NF means the table should already follow 1NF, and non-key columns should depend on the whole primary key.

Simple idea:

```txt
Do not store data in a table if it does not fully belong to that table.
```

## Third Normal Form - 3NF

3NF means the table should already follow 2NF, and non-key columns should not depend on other non-key columns.

Simple idea:

```txt
Store data in the correct table.
```

## Denormalization

Denormalization is the opposite of normalization.

Sometimes we intentionally duplicate data to improve read performance.

Example:

```txt
Store order total directly in orders table
```

Even though it can be calculated from order items, storing it may make order listing faster.

Denormalization should be done carefully.

## Real Project Example

In an eCommerce app, normalized tables can be:

```txt
users
products
categories
orders
order_items
payments
addresses
```

Instead of storing all order, user, and product details in one large table, we split them into related tables.

## Important Note

Normalization is useful, but over-normalization can make queries complex.

A good database design balances:

```txt
clean structure
performance
business requirements
```

## Summary

Normalization is the process of organizing database tables to reduce duplication and improve consistency. It usually means splitting data into related tables. Normalization makes data cleaner, but we should also consider performance and real project needs.

## Practice Questions

### Q1. What is normalization?

Normalization is the process of organizing database tables to reduce duplication and improve consistency.

### Q2. Why is normalization useful?

It reduces duplicate data and keeps data consistent.

### Q3. What is one problem with duplicate data?

It can become inconsistent if one copy is updated and another copy is not updated.

### Q4. What does 1NF mean in simple words?

Each column should contain one value only.

### Q5. What is denormalization?

Denormalization means intentionally duplicating or storing extra data to improve read performance.
