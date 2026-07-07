# 47 - Relationship and Cascade

## Objective

Understand database relationships and the basic concept of cascade actions.

## What is a Relationship?

A relationship means how two database tables are connected.

In simple words:

```txt
Relationship = connection between tables
```

Example:

```txt
One user can have many orders.
```

So the `users` table and `orders` table are related.

## Why Relationships Are Needed

Relationships help us avoid duplicate data.

Instead of saving full user information inside every order, we save only the user id.

Example:

```txt
orders.user_id -> users.id
```

This connects an order with a user.

## Common Relationship Types

There are three common relationship types:

```txt
One-to-One
One-to-Many
Many-to-Many
```

## One-to-One Relationship

One record in one table is connected to one record in another table.

Example:

```txt
One user has one profile.
```

Tables:

```txt
users
profiles
```

Possible relation:

```txt
profiles.user_id -> users.id
```

## One-to-Many Relationship

One record in one table is connected to many records in another table.

Example:

```txt
One user has many orders.
```

Tables:

```txt
users
orders
```

Possible relation:

```txt
orders.user_id -> users.id
```

This is very common in real projects.

## Many-to-Many Relationship

Many records in one table can connect with many records in another table.

Example:

```txt
One order can have many products.
One product can exist in many orders.
```

For this, we usually use a middle table.

Example:

```txt
orders
products
order_items
```

`order_items` connects orders and products.

Possible relations:

```txt
order_items.order_id -> orders.id
order_items.product_id -> products.id
```

## What is Cascade?

Cascade means an action on one table can automatically affect related rows in another table.

In simple words:

```txt
Cascade = automatic action on related data
```

Example:

If a user is deleted, what should happen to that user's orders?

This behavior can be controlled using cascade rules.

## ON DELETE CASCADE

`ON DELETE CASCADE` means if the parent row is deleted, related child rows are also deleted automatically.

Example:

```txt
Delete user -> user's orders also deleted
```

SQL example:

```sql
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
```

## ON DELETE SET NULL

`ON DELETE SET NULL` means if the parent row is deleted, the foreign key value becomes null.

Example:

```txt
Delete user -> orders.user_id becomes NULL
```

This keeps the order record but removes the user link.

## ON DELETE RESTRICT

`ON DELETE RESTRICT` means the database does not allow deleting the parent row if child rows exist.

Example:

```txt
Cannot delete user if user has orders
```

## Parent and Child Table

In a relationship:

```txt
Parent table = main table
Child table = table that depends on parent
```

Example:

```txt
users  -> parent table
orders -> child table
```

Because orders depend on users through `user_id`.

## Real Project Example

In an eCommerce app:

```txt
users -> orders
orders -> order_items
products -> order_items
orders -> payments
users -> addresses
```

Common relations:

```txt
orders.user_id -> users.id
order_items.order_id -> orders.id
order_items.product_id -> products.id
payments.order_id -> orders.id
addresses.user_id -> users.id
```

## Important Note

Cascade should be used carefully.

If used incorrectly, deleting one record can delete many related records automatically.

Example:

```txt
Deleting a user may delete all user orders if ON DELETE CASCADE is used.
```

In real projects, business rules decide which cascade behavior is correct.

## Summary

Relationships connect tables. Common relationship types are one-to-one, one-to-many, and many-to-many. Cascade controls what happens to related data when parent data is deleted or updated. Cascade is useful but should be used carefully.

## Practice Questions

### Q1. What is a database relationship?

A relationship is a connection between two tables.

### Q2. Give one example of a one-to-many relationship.

One user has many orders.

### Q3. What is a many-to-many relationship?

Many records in one table can connect with many records in another table.

### Q4. What does `ON DELETE CASCADE` do?

It deletes related child rows automatically when the parent row is deleted.

### Q5. Why should cascade be used carefully?

Because it can automatically delete or update related records.
