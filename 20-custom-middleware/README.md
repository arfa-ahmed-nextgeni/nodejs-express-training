# 20 - Custom Middleware

## Objective

Learn how to create reusable middleware functions and use them across different Express routes.

## Theory

A custom middleware is a middleware function that we create ourselves to perform a specific task.

Custom middleware helps avoid repeating the same logic in multiple routes.

Examples of custom middleware:

- Logger middleware
- Authentication middleware
- Authorization middleware
- Validation middleware
- Request timing middleware

## Why Use Custom Middleware?

Without middleware, we may repeat the same logic in many routes.

With middleware, we write the logic once and reuse it.

Example:

```ts
function logger(req, _res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
```

Then we can reuse it:

```ts
app.get("/products", logger, (_req, res) => {
  res.send("Products");
});
```

## Middleware Can Stop a Request

A middleware does not always need to call `next()`.

If middleware sends a response, the request should stop there.

Example:

```ts
function auth(_req, res, next) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return res.status(401).send("Unauthorized");
  }

  next();
}
```

Important rule:

```txt
If you send a response, stop.
If you do not send a response, call next().
```

## Example

```ts
app.get("/admin", logger, auth, (_req, res) => {
  res.send("Admin Dashboard");
});
```

Request flow:

```txt
Request
  ↓
logger middleware
  ↓
auth middleware
  ↓
route handler
  ↓
response
```

If `auth` sends `401 Unauthorized`, the route handler will not run.

## Summary

Custom middleware is developer-created middleware. It is useful for reusable logic like logging, authentication, authorization, validation, and request timing. A middleware can either call `next()` to continue or send a response to stop the request.

## Practice Questions

### Q1. What is custom middleware?

Custom middleware is a middleware function that we create ourselves to perform a specific task.

### Q2. Why do we use custom middleware?

We use custom middleware to reuse common logic across multiple routes and avoid duplicate code.

### Q3. If middleware sends `res.status(401).send("Unauthorized")`, should it call `next()` afterward?

No. If middleware sends a response, it should not call `next()` afterward because the request is already completed.

### Q4. What happens to the route handler if middleware sends a response?

The route handler will not run.

### Q5. Name two real-world uses of custom middleware.

Logging and authorization are two real-world uses of custom middleware.
