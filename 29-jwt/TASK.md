# Practice Task - JWT

## Task 1

Install JWT package:

```bash
npm install jsonwebtoken
npm install -D @types/jsonwebtoken
```

## Task 2

Create:

```txt
29-jwt/src/index.ts
```

## Task 3

Create a demo signing key:

```ts
const JWT_SECRET = "demo-jwt-signing-key";
```

For practice this is okay, but in real projects this value should come from environment variables.

## Task 4

Create this login route:

```txt
POST /login
```

For practice, accept any email and password from the request body and create a token:

```ts
const token = jwt.sign(
  { id: 1, email: req.body.email, role: "user" },
  JWT_SECRET,
  { expiresIn: "1h" }
);
```

Return:

```json
{
  "message": "Login successful",
  "token": "generated-token"
}
```

## Task 5

Create an auth middleware.

It should read the token from:

```ts
req.headers.authorization
```

If header is missing, return status `401`:

```json
{
  "message": "Unauthorized"
}
```

## Task 6

Extract token from an Authorization header in this format:

```txt
Bearer generated-token
```

Verify it using:

```ts
jwt.verify(token, JWT_SECRET)
```

If token is invalid, return status `401`:

```json
{
  "message": "Invalid token"
}
```

## Task 7

Create this protected route:

```txt
GET /profile
```

Use the auth middleware.

Return:

```json
{
  "message": "Profile data"
}
```

## Task 8

Add script in `package.json`:

```json
"dev:jwt": "tsx 29-jwt/src/index.ts"
```

## Task 9

Run:

```bash
npm run dev:jwt
```

Test login:

```txt
POST http://localhost:3000/login
```

Body:

```json
{
  "email": "user@example.com",
  "password": "demo-password"
}
```

Copy the token from the response.

Test profile:

```txt
GET http://localhost:3000/profile
```

Header:

```txt
Authorization: Bearer copied-token-from-login-response
```

## Expected Understanding

After this topic, I should be able to:

- Explain JWT
- Create token using `jwt.sign()`
- Verify token using `jwt.verify()`
- Read token from Authorization header
- Protect routes using JWT middleware
- Understand why sensitive data should not be stored inside JWT payload
