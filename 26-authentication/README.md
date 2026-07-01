# 26 - Authentication

## Objective

Learn the basic idea of authentication and how to protect routes in an Express.js API.

## Theory

Authentication means checking who the user is.

In APIs, authentication is commonly done using a token. The client sends the token with the request, and the backend checks whether the token is valid.

Example request header:

```txt
Authorization: Bearer my-secret-token
```

If the token is valid, the request is allowed.

If the token is missing or invalid, the API returns `401 Unauthorized`.

## Authentication vs Authorization

Authentication and authorization are related, but they are not the same.

```txt
Authentication -> Who are you?
Authorization  -> Are you allowed to access this?
```

Example:

- Authentication: user is logged in
- Authorization: logged-in user is allowed to access admin page

## Simple Auth Middleware

```ts
function auth(req, res, next) {
  const token = req.headers.authorization;

  if (token !== "Bearer my-secret-token") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}
```

## Protected Route Example

```ts
app.get("/profile", auth, (_req, res) => {
  res.json({ message: "Profile data" });
});
```

If the request has a valid token, the route handler runs.

If the request has no token or invalid token, the route handler does not run.

## Real Project Usage

Authentication is used in real APIs for:

- Login sessions
- User profile APIs
- Checkout APIs
- Order history APIs
- Admin dashboards
- Any private user data

In real production APIs, tokens are usually JWTs, session IDs, or OAuth access tokens. In this practice topic, we use a hardcoded token only to understand the basic flow.

## Summary

Authentication checks who the user is. In Express, we can create authentication middleware that checks the `Authorization` header and either allows the request by calling `next()` or blocks it with `401 Unauthorized`.

## Practice Questions

### Q1. What is authentication?

Authentication means checking who the user is.

### Q2. Which header commonly sends the token?

The `Authorization` header commonly sends the token.

### Q3. Which status code should be returned when token is missing or invalid?

`401 Unauthorized`.

### Q4. What is the difference between authentication and authorization?

Authentication checks who the user is. Authorization checks whether the user is allowed to access something.

### Q5. Should protected route handler run if token is invalid?

No. If token is invalid, middleware should return `401` and stop the request.
