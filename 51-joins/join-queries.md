1. Get orders with user names
```
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON orders.user_id = users.id;
```

2. Get all users with their orders if available
```
SELECT * FROM users
INNER JOIN orders ON orders.user_id = users.id;
```

3. Get order items with product names
```
SELECT users.name, orders.total
FROM order_items
INNER JOIN orders ON orders.user_id = users.id;
```