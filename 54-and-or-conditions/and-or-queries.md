1. Get all active users from Lahore.
SELECT * FROM users WHERE city = 'lahore' AND is_active = true;

2. Get products whose price is greater than 100 and stock is greater than 0.
SELECT * FROM products WHERE price > 100 AND stock > 0;

3. Get orders whose status is either pending or processing.
SELECT * FROM orders WHERE status = 'pending' OR status = 'processing';

4. Get users who are from Lahore or Karachi.
SELECT * FROM users WHERE city = 'karachi' OR city = 'lahore';

5. Get completed orders whose total is greater than or equal to 250.
SELECT * FROM orders WHERE status = 'completed' AND total >= 250;

6. Get products that are in the perfume or watch category and have stock greater than 0.
SELECT * FROM products WHERE (category = 'perfume' OR category = 'watch') AND stock > 0;

7. Get inactive users who are from Lahore or Karachi.
SELECT * FROM users WHERE (city = 'karachi' OR city = 'lahore') AND is_active = false;