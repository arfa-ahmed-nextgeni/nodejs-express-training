# 29 - JWT

## Objective

Learn what JWT is, how to create a token after login, and how to verify that token in protected Express routes.

## Theory

JWT stands for JSON Web Token.

A JWT is a token that contains encoded user information. It is commonly used for authentication in APIs.

Basic flow:

```txt
1. User logs in
2. Server verifies credentials
3. Server creates JWT
4. Client stores JWT
5. Client sends JWT in Authorization header
6. Server verifies JWT before allowing protected routes
```

Example header:

```txt
Authorization: Bearer token_here
```

## JWT Structure

A JWT has three parts:

```txt
header.payload.signature
```

Example:

```txt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIn0.signature
```

## Signing a Token

We create a token using `jwt.sign()`.

```ts
const token = jwt.sign(
  { id: 1, email: "user@example.com", role: "admin" },
  "my-secret-key",
  { expiresIn: "1h" }
);
```

The first argument is the payload.

The second argument is the secret key.

The third argument is optional settings like expiry time.

## Verifying a Token

We verify a token using `jwt.verify()`.

```ts
const decoded = jwt.verify(token, "my-secret-key");
```

If token is valid, we get decoded user data.

If token is invalid or expired, verification fails.

## JWT Middleware

```ts
function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "my-secret-key");
    req.user = decoded;
    next();
  } catch (_error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
```

## Real Project Usage

JWT is commonly used for:

- Login authentication
- Protecting profile APIs
- Protecting checkout APIs
- Protecting order history APIs
- Sending user ID and role in token payload
- Stateless authentication

## Important Note

A JWT is encoded, not encrypted by default.

That means we should not put sensitive data like passwords inside a JWT payload.

Good payload:

```json
{
  "id": 1,
  "email": "user@example.com",
  "role": "admin"
}
```

Bad payload:

```json
{
  "password": "plain-password"
}
```

## Summary

JWT is used to authenticate API requests. After login, the server creates a token. The client sends that token in the `Authorization` header. The server verifies the token before allowing access to protected routes.

## Practice Questions

### Q1. What does JWT stand for?

JWT stands for JSON Web Token.

### Q2. Where does the client usually send the JWT?

In the `Authorization` header as a Bearer token.

### Q3. Which function creates a JWT?

`jwt.sign()`.

### Q4. Which function verifies a JWT?

`jwt.verify()`.

### Q5. Should we store passwords inside JWT payload?

No. Sensitive data like passwords should never be stored inside JWT payload.
