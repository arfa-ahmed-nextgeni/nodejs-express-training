# Task - Basic SQL Functions

## Goal

Practice simple SQL functions using user and product data.

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
}

Table products {
  id integer [primary key]
  name varchar(100)
  price decimal(10, 2)
}
```

## Instructions

Create a file named:

```txt
function-queries.md
```

Write SQL queries for the following requirements.

## Required Practice

### 1. Uppercase User Names

Return every user's name in uppercase.

Use:

```txt
UPPER()
```

### 2. Lowercase User Emails

Return every user's email in lowercase.

Use:

```txt
LOWER()
```

### 3. User Name Length

Return the user's name and the length of the name.

Use:

```txt
LENGTH()
```

### 4. Combined User Details

Return one value in this format:

```txt
Test User - user@example.com
```

Use:

```txt
CONCAT()
```

### 5. Rounded Product Prices

Return the product name and rounded price.

Use:

```txt
ROUND()
```

### 6. Handle Missing Email

Return the user's name and email. If email is `NULL`, show:

```txt
No email
```

Use:

```txt
COALESCE()
```

## Requirements

Your file should include:

- six SQL queries
- a clear alias using `AS` for calculated columns
- a short note under each query explaining its result

## Expected Learning

After completing this task, you should understand how SQL functions transform values in query results without changing the saved table data.
