1. Get users list

GET * FROM users

2. Add one new user

INSERT INTO users (name, email)
VALUES ('Test User', 'user@example.com');

3. Change one user's name

UPDATE users
SET name = 'Updated User'
WHERE id = 1;