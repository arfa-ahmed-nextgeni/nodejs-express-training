# Practice Task - Password Hashing

## Task 1

Install bcrypt:

```bash
npm install bcrypt
npm install -D @types/bcrypt
```

## Task 2

Create:

```txt
28-password-hashing/src/index.ts
```

## Task 3

Create this route:

```txt
POST /register
```

It should read this value from `req.body`:

```txt
password
```

If password is missing, return status `400`:

```json
{
  "message": "Password is required"
}
```

## Task 4

Hash the password using bcrypt:

```ts
const hashedPassword = await bcrypt.hash(password, 10);
```

Return:

```json
{
  "message": "User registered",
  "hashedPassword": "..."
}
```

## Task 5

Create this route:

```txt
POST /login
```

For practice, use one stored hashed password variable.

Compare incoming password with the stored hash:

```ts
const isMatch = await bcrypt.compare(password, storedHashedPassword);
```

## Task 6

If password does not match, return status `401`:

```json
{
  "message": "Invalid credentials"
}
```

If password matches, return:

```json
{
  "message": "Login successful"
}
```

## Task 7

Add script in `package.json`:

```json
"dev:hashing": "tsx 28-password-hashing/src/index.ts"
```

## Task 8

Run:

```bash
npm run dev:hashing
```

Test register:

```json
{
  "password": "myPassword123"
}
```

Test login with same password:

```json
{
  "password": "myPassword123"
}
```

## Expected Understanding

After this topic, I should be able to:

- Explain password hashing
- Understand why plain passwords are unsafe
- Use `bcrypt.hash()`
- Use `bcrypt.compare()`
- Understand why hashing is different from encryption
