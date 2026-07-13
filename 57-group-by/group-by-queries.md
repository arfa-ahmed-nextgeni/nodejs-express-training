1. Count users in each city.
SELECT city, COUNT(*) AS total_users FROM users GROUP BY city;

2. Count orders for each status.
SELECT status, COUNT(*) AS total_order FROM orders GROUP BY status;

3. Calculate the total order amount for each status.
SELECT status, SUM(total) AS total_order_amount FROM orders GROUP BY status;

4. Calculate the average product price for each category.
SELECT category, AVG(price) AS avg_product_price FROM products GROUP BY category;

5. Get the minimum and maximum product price for each category.
SELECT category, MIN(price) AS min_price, MAX(price) AS max_price FROM products GROUP BY category;

6. Count orders for each user_id.
SELECT user_id, COUNT(*) AS total_orders FROM orders GROUP BY user_id;

7. Count orders for each user name by joining users and orders.
SELECT users.name, COUNT(orders.id) AS total_orders FROM users LEFT JOIN orders ON users.id = orders.user_id GROUP BY users.name;

8. Count orders for each status where the order total is at least 200.
SELECT status, COUNT(*) AS total_orders FROM orders WHERE total <= 200 GROUP BY status;