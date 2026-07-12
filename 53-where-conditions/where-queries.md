1. Get the user whose id is 1.
SELECT * FROM users WHERE id = 1;

2. Get all active users.
SELECT * FROM users WHERE is_active = true;

3. Get all products whose price is greater than 100.
SELECT * FROM products WHERE price > 100;

4. Get all products whose stock is less than or equal to 10.
SELECT * FROM products WHERE stock <= 10;

5. Get all completed orders.
SELECT * FROM orders WHERE status = 'completed';

6. Get all orders whose total is greater than or equal to 250.
SELECT * FROM orders WHERE total >= 250;

7. Get only the name and email of the user whose email is user@example.com.
SELECT name, email FROM users WHERE email = 'user@example.com';

8. Get all orders whose status is not completed.
SELECT * FROM orders WHERE status != 'completed';