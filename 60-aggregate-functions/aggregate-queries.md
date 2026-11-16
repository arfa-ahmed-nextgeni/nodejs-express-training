1. SELECT COUNT(*) as total_products FROM products
2. SELECT SUM(stock) as total_stock FROM products
3. SELECT AVG(price) as avg_price FROM products
4. SELECT MIN(price) as min_price, MAX(price) as max_price FROM products
5. SELECT SUM(total) as total_amount FROM orders WHERE status = 'Completed'
6. SELECT status, AVG(total) as avg_amount FROM orders GROUP BY status
7. SELECT category, COUNT(*) as total_products FROM products GROUP BY category
8. SELECT category, AVG(price) as avg_price FROM products GROUP BY category HAVING AVG(price) >= 100
9. SELECT user_id, COUNT(*) as total_orders FROM orders GROUP BY user_id
10. SELECT user_id, SUM(total) as total FROM orders GROUP BY user_id HAVING SUM(total) >= 500
