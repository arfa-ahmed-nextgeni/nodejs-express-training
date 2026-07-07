# 43 - Columns

## Objective

Understand what columns are in a SQL database table.

## What is a Column?

A column is one field in a table.

In simple words:

```txt
Column = one type of data in a table
```

Example users table:

```txt
id | name      | email
1  | Test User | user@example.com
2  | Demo User | demo@example.com
```

Here, the columns are:

```txt
id
name
email
```

## Why Columns Are Used

Columns define what information each row can store.

Example:

A `users` table can have these columns:

```txt
id
name
email
password
created_at
```

Each user row follows this structure.

## Column Name

A column name should clearly describe the data stored in that column.

Good examples:

```txt
email
first_name
created_at
price
quantity
```

Bad examples:

```txt
data
value
info
abc
```

Clear names make queries and code easier to understand.

## Column Data Type

Each column has a data type.

The data type tells what kind of value can be stored.

Examples:

```txt
INT       -> number
VARCHAR   -> text
DATE      -> date
BOOLEAN   -> true/false
DECIMAL   -> decimal number
```

Example:

```sql
CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  email VARCHAR(150),
  is_active BOOLEAN
);
```

## Required Column

Some columns can be required.

Example:

```txt
email should be required for a user
```

In SQL, this is usually done using `NOT NULL`.

Example:

```sql
email VARCHAR(150) NOT NULL
```

## Unique Column

Some columns should have unique values.

Example:

```txt
email should be unique
```

This means two users should not have the same email.

In SQL, this is done using `UNIQUE`.

Example:

```sql
email VARCHAR(150) UNIQUE
```

## Default Value

A column can have a default value.

Example:

```sql
is_active BOOLEAN DEFAULT true
```

This means if no value is provided, `is_active` will be `true` by default.

## Real Project Example

For an eCommerce `products` table, columns can be:

```txt
id
name
sku
price
stock_quantity
category_id
created_at
updated_at
```

Each column stores one specific piece of product data.

## Column vs Row

A column is a field.

A row is one complete record.

Example:

```txt
Column: email
Row: one full user record containing id, name, email
```

## Summary

A column is one field in a table. Columns define what type of data each row can store. Each column has a name and usually a data type. Columns can also have rules like `NOT NULL`, `UNIQUE`, and default values.

## Practice Questions

### Q1. What is a column?

A column is one field in a table.

### Q2. What does a column data type define?

It defines what kind of value the column can store.

### Q3. What does `NOT NULL` mean?

It means the column value is required.

### Q4. What does `UNIQUE` mean?

It means duplicate values are not allowed in that column.

### Q5. Give one example of a column in a users table.

`email`.
