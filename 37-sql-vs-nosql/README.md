# 37 - SQL vs NoSQL

## Objective

Learn the basic difference between SQL and NoSQL databases.

## What is a Database?

A database is used to store and manage data.

Examples of data:

- Users
- Products
- Orders
- Categories
- Payments
- Logs

## SQL Database

SQL databases store data in tables.

A table has rows and columns.

Example users table:

```txt
id | name      | email
1  | Test User | user@example.com
```

Common SQL databases:

- MySQL
- PostgreSQL
- SQLite
- SQL Server

## NoSQL Database

NoSQL databases can store data in different formats.

A common NoSQL format is document-based data.

Example document:

```json
{
  "id": 1,
  "name": "Test User",
  "email": "user@example.com"
}
```

Common NoSQL databases:

- MongoDB
- Redis
- Cassandra
- DynamoDB

## Main Difference

SQL usually uses tables, rows, and columns.

NoSQL usually uses flexible formats like documents, key-value data, or wide-column data.

## SQL Advantages

- Good for structured data
- Good for relationships
- Supports joins
- Strong data consistency
- Good for transactions

## SQL Disadvantages

- Schema changes can need planning
- Complex joins can become hard
- Horizontal scaling can be more complex

## NoSQL Advantages

- Flexible data structure
- Good for fast-changing data
- Can scale horizontally more easily
- Good for large unstructured or semi-structured data

## NoSQL Disadvantages

- Relationships can be harder
- Joins are usually not available like SQL
- Data consistency depends on database type and design

## When to Use SQL

Use SQL when data has clear relationships.

Examples:

- Orders and order items
- Users and roles
- Payments and invoices
- Inventory systems

## When to Use NoSQL

Use NoSQL when data structure is flexible or changes often.

Examples:

- Logs
- Events
- User preferences
- Product metadata
- Real-time app data

## Real Project Example

In an eCommerce project:

SQL can be good for:

- Orders
- Payments
- Customers
- Inventory

NoSQL can be good for:

- Logs
- Analytics events
- Search metadata
- Cache-like data

## Summary

SQL databases store structured data in tables. NoSQL databases store data in flexible formats. SQL is usually better for relational data and transactions. NoSQL is useful when data is flexible, large, or changes frequently.

## Practice Questions

### Q1. What type of structure does SQL usually use?

Tables with rows and columns.

### Q2. Give two examples of SQL databases.

MySQL and PostgreSQL.

### Q3. Give one example of a NoSQL database.

MongoDB.

### Q4. Which database type is usually better for strong relationships?

SQL.

### Q5. Which database type is usually more flexible for changing data shape?

NoSQL.
