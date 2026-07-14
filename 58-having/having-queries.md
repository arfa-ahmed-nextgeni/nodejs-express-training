1. Count orders for each status and return only statuses with at least 2 orders.
SELECT status, COUNT(*) AS total_orders FROM orders GROUP BY status HAVING COUNT(*) >= 2

2. Calculate total order amount for each user and return only users whose total is at least 500.
SELECT user_id, SUM(total) AS user_orders_total FROM orders GROUP BY user_id HAVING SUM(total) >= 500

3. Calculate average product price for each category and return only categories whose average price is greater than 100.
SELECT category, AVG(price) AS avg_product_price FROM products GROUP BY category HAVING AVG(price) > 100

4. Count users in each city and return only cities with more than 2 users.
SELECT city, COUNT(*) AS total_users FROM users GROUP BY city HAVING COUNT(*) > 2

5. Count orders for each user and return only users with at least 2 orders.
SELECT users.name, COUNT(orders.id) AS total_orders FROM users INNER JOIN orders ON users.id = orders.user_id GROUP BY users.id, users.name HAVING COUNT(orders.id) >= 2;

6. First filter orders whose total is at least 200, then group by status, and return only groups with at least 2 orders.
SELECT status, COUNT(*) AS total_orders FROM orders WHERE total >= 200 GROUP BY status HAVING COUNT(*) >= 2

7. Join users and orders, then return user names only when they have at least 2 orders.
SELECT users.name, COUNT(orders.id) AS total_orders FROM users INNER JOIN orders ON users.id = orders.user_id GROUP BY users.name HAVING COUNT(orders.id) >= 2;