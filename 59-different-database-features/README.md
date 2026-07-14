# 59 - Different Database Features

## Objective

Understand some important features that can differ between database systems such as MySQL, PostgreSQL, SQLite, and SQL Server.

## Why Database Features Differ

SQL databases follow many common ideas, but each database can provide different features, syntax, data types, and tools.

In simple words:

```txt
SQL concept may be common, but implementation can differ by database.
```

## Common Database Systems

Examples:

```txt
MySQL
PostgreSQL
SQLite
SQL Server
Oracle
```

## 1. Data Types

Different databases can use different data type names.

Example:

```txt
MySQL:      TINYINT(1)
PostgreSQL: BOOLEAN
SQL Server: BIT
```

They may all be used to represent true/false values, but the syntax can differ.

## 2. Auto-Generated IDs

Different databases generate automatic IDs differently.

Examples:

```txt
MySQL:      AUTO_INCREMENT
PostgreSQL: GENERATED AS IDENTITY
SQL Server: IDENTITY
SQLite:     INTEGER PRIMARY KEY AUTOINCREMENT
```

## 3. LIMIT and Pagination

MySQL and PostgreSQL commonly support:

```sql
SELECT * FROM products
LIMIT 10 OFFSET 20;
```

SQL Server commonly uses syntax such as:

```sql
SELECT * FROM products
ORDER BY id
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;
```

## 4. String Concatenation

MySQL commonly uses:

```sql
CONCAT(first_name, ' ', last_name)
```

PostgreSQL can also use:

```sql
first_name || ' ' || last_name
```

## 5. JSON Support

Modern databases can store and query JSON data.

PostgreSQL provides strong `JSON` and `JSONB` support.

MySQL also supports a `JSON` data type and JSON functions.

Example use cases:

```txt
product metadata
settings
flexible attributes
API payload details
```

## 6. Full-Text Search

Some databases provide built-in full-text search features.

This can help search large text fields such as:

```txt
product descriptions
article content
book titles
```

The setup and syntax differ between databases.

## 7. Transactions

Transactions allow multiple operations to succeed or fail together.

Main commands:

```sql
BEGIN;
COMMIT;
ROLLBACK;
```

Example:

When placing an order, we may need to:

```txt
create order
create order items
reduce product stock
```

If one operation fails, a transaction can roll back all related changes.

## 8. Views

A view is a saved query that can be used like a virtual table.

Example idea:

```txt
completed_orders_view
active_users_view
```

Views can simplify repeated queries.

## 9. Stored Procedures and Functions

Some databases allow reusable logic to be stored inside the database.

Examples:

```txt
stored procedures
database functions
```

Support and syntax differ by database.

## 10. Triggers

A trigger automatically runs when a database event happens.

Examples:

```txt
after insert
after update
before delete
```

Triggers will be covered separately later in the training plan.

## 11. Extensions

PostgreSQL supports extensions that add extra features.

Examples include features for:

```txt
UUID generation
geographic data
advanced search
```

Other databases may provide similar features differently.

## 12. Replication and Scaling

Database systems may support:

```txt
read replicas
primary and replica servers
clustering
partitioning
sharding
```

These features help large applications manage more data and traffic.

## MySQL vs PostgreSQL - Simple Comparison

| Feature | MySQL | PostgreSQL |
|---|---|---|
| Easy for beginners | Yes | Yes, but can feel more advanced |
| JSON support | Yes | Strong JSON and JSONB support |
| Advanced SQL features | Good | Very strong |
| Common web usage | Very common | Very common |
| Extensions | Limited compared with PostgreSQL | Strong extension system |

## Which Database Should We Use?

The choice depends on:

```txt
project requirements
team experience
hosting support
performance needs
data structure
required database features
```

There is no single database that is best for every project.

## Real Project Advice

Do not assume SQL written for one database will always work without changes in another database.

Always check:

```txt
data types
pagination syntax
functions
JSON syntax
auto-generated ID syntax
supported features
```

## Summary

Different SQL databases share common concepts, but their syntax and features can differ. Important differences include data types, automatic IDs, pagination, JSON support, functions, extensions, and scaling features. Developers should understand the database used by their project instead of assuming every SQL database behaves exactly the same.

## Practice Questions

### Q1. Do all SQL databases use exactly the same syntax?

No. They share common SQL concepts, but some syntax and features differ.

### Q2. Give two examples of SQL databases.

MySQL and PostgreSQL.

### Q3. What is a transaction?

A transaction groups related operations so they can succeed or fail together.

### Q4. What is a view?

A view is a saved query that can be used like a virtual table.

### Q5. Why should developers check database-specific documentation?

Because data types, functions, syntax, and supported features can differ between databases.
