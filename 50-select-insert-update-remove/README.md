# 50 - SELECT, INSERT, UPDATE, and Remove Rows

## Objective

Understand the main SQL operations used with database tables.

## Main Data Operations

In SQL databases, we commonly do four operations:

```txt
Read data
Add data
Change data
Remove data
```

These operations are also called CRUD.

## Read Data

To read data from a table, we use a read query.

Example idea:

```txt
Get all users
Get one user by id
Get product list
```

## Add Data

To add new data into a table, we use an add query.

Example idea:

```txt
Add new user
Create new order
Add new product
```

## Change Data

To change existing data, we use a change query.

Example idea:

```txt
Change user name
Update product stock
Change order status
```

## Remove Data

To remove existing rows, we use a remove operation.

This should be used carefully.

Important rule:

```txt
Always target the specific row using a condition.
```

## WHERE Condition

`WHERE` is used to target specific rows.

Example idea:

```txt
Only user with id 1
Only order with id 10
Only products with active status
```

`WHERE` is very important with change and remove operations.

## Real Project Example

In an eCommerce app:

```txt
Read product list
Add new order
Change product stock
Remove cart item
```

## Summary

Basic SQL operations are used to read, add, change, and remove data. Conditions are important because they help target specific rows.

## Practice Questions

### Q1. What is read operation used for?

It is used to get data from a table.

### Q2. What is add operation used for?

It is used to add new data into a table.

### Q3. What is change operation used for?

It is used to update existing data.

### Q4. What is remove operation used for?

It is used to remove existing rows.

### Q5. Why is condition important?

It helps target specific rows.
