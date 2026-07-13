1. Get only the first 5 products.
SELECT * FROM products LIMIT 5;

2. Get only 3 products that have stock greater than 0.
SELECT * FROM products WHERE stock > 0 LIMIT 3;

3. Get the 2 most expensive products.
SELECT * FROM products ORDER BY price DESC LIMIT 2;

4. Get the first 5 orders sorted by highest id first.
SELECT * FROM orders ORDER BY id DESC LIMIT 5;

5. Skip the first 5 products and return the next 5 products.
SELECT * FROM products LIMIT 5 OFFSET 5;

6. Write a query for page 3 when the page size is 10.
LIMIT 10 OFFSET 20