INSERT INTO users (id, name, email) VALUES
(1, 'Test User', 'user@example.com'),
(2, 'Demo User', 'demo@example.com'),
(3, 'Guest User', 'guest@example.com');

INSERT INTO products (id, name, price) VALUES
(1, 'Product A', 100.00),
(2, 'Product B', 250.00),
(3, 'Product C', 80.00);

INSERT INTO orders (id, user_id, total, status) VALUES
(1, 1, 350.00, 'completed'),
(2, 1, 100.00, 'pending'),
(3, 2, 250.00, 'completed');

INSERT INTO order_items (id, order_id, product_id, quantity) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 2, 1, 1),
(4, 3, 2, 1);
