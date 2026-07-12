1. Uppercase User Names
SELECT UPPER(name) AS uppercase_name FROM users

2. Lowercase User Emails
SELECT LOWER(email) AS lowercase_email FROM users

3. User Name Length
SELECT name, LENGTH(name) AS name_length FROM users 

4. Combined User Details
SELECT CONCAT(name, ' - ', email) AS user_details FROM users

5. Rounded Product Prices
SELECT name, ROUND(price) AS rounded_price FROM products

6. Handle Missing Email
SELECT COALESCE(email, 'No email') AS email from users