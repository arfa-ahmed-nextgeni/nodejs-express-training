# 19 - Middleware

Middleware is one of the most important concepts in Express.js.

A middleware function runs after a request reaches the server and before the final route handler sends a response.

## Simple Definition

Middleware is a function that runs between receiving a request and sending a response.

## Middleware Function

A middleware function commonly receives three parameters:

```ts
(req, res, next)
```

- `req`: Incoming request object
- `res`: Response object
- `next`: Function used to pass control to the next middleware or route handler

## Request Flow

```txt
Client Request
   ↓
Middleware 1
   ↓
Middleware 2
   ↓
Route Handler
   ↓
Response
```

## Example

```ts
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

This middleware logs every request and then calls `next()` so Express can continue.

## Why `next()` Is Important

If middleware calls `next()`, Express continues to the next middleware or route handler.

If middleware does not call `next()` and does not send a response, the request hangs because Express does not know what to do next.

## Application-level Middleware

Application-level middleware usually uses `app.use()` and runs for every request.

```ts
app.use((_req, _res, next) => {
  console.log("Application middleware");
  next();
});
```

## Route-level Middleware

Route-level middleware runs only for a specific route.

```ts
function auth(_req, _res, next) {
  console.log("Auth middleware");
  next();
}

app.get("/admin", auth, (_req, res) => {
  res.send("Admin Page");
});
```

## Built-in Middleware

We have already used this built-in middleware:

```ts
app.use(express.json());
```

It parses incoming JSON request bodies and makes the data available in `req.body`.

## Common Uses

Middleware is commonly used for:

- Logging requests
- Parsing JSON body
- Authentication
- Authorization
- Validation
- Error handling

## Summary

Middleware is a function that runs before the route handler. It can read or modify the request, send a response, or call `next()` to pass control to the next middleware or route handler.

## Practice Questions

### Q1. What is middleware?

Middleware is a function that runs after a request reaches the server and before the route handler sends a response.

### Q2. What does `next()` do?

`next()` forwards the request to the next middleware or route handler.

### Q3. What happens if middleware neither calls `next()` nor sends a response?

The request hangs because Express waits for the middleware to continue or end the request.

### Q4. Which middleware have we already used?

We have used `app.use(express.json())` to parse incoming JSON request bodies.

### Q5. Which middleware runs for every request?

`app.use(...)` middleware can run for every request.

### Q6. Which middleware runs only for one route?

Route-level middleware, for example `app.get("/admin", auth, handler)`, runs only for that route.
