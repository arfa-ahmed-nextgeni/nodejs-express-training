1. Count all users.
SELECT COUNT(*) AS total_users FROM users;

2. Count all active users.
SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;

3. Count products whose stock is greater than 0.
SELECT COUNT(*) AS in_stock_products FROM products WHERE stock > 0;

4. Count pending orders.
SELECT COUNT(*) AS pending_orders FROM orders WHERE status = 'pending';

5. Count users whose email is not NULL using COUNT(email).
SELECT COUNT(email) AS users_with_email FROM users;

6. Count the number of unique cities using COUNT(DISTINCT city).
SELECT COUNT(DISTINCT city) AS total_cities FROM users;

7. Count completed orders whose total is greater than or equal to 250.
SELECT COUNT(*) AS completed_order FROM orders WHERE total >= 250;