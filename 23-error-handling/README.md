# 23 - Error Handling

## Objective

Learn how to handle errors in Express.js without crashing the server and how to send proper error responses to the client.

## Theory

Error handling means detecting problems in the application and responding with a proper HTTP status code and message.

Errors can happen because of:

- Invalid client input
- Missing data
- Database failures
- External API failures
- Bugs in code
- Unexpected server exceptions

In Express.js, we should not leave errors unhandled. Unhandled errors can crash the server or return unclear responses to the client.

## Basic Error Response

For simple validation errors, we can return a response directly:

```ts
app.post("/users", (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({
      message: "Email is required"
    });
  }

  res.status(201).json({ message: "User created" });
});
```

## try...catch

For code that may throw an error, we can use `try...catch`.

```ts
app.get("/profile", (_req, res) => {
  try {
    throw new Error("Something failed");
  } catch (_error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
});
```

## Centralized Error Middleware

Express also supports centralized error-handling middleware.

Error middleware has four parameters:

```ts
(error, req, res, next)
```

Example:

```ts
app.use((error, _req, res, _next) => {
  console.error(error);

  res.status(500).json({
    message: "Something went wrong"
  });
});
```

## Important Point

Normal middleware has three parameters:

```ts
(req, res, next)
```

Error-handling middleware has four parameters:

```ts
(error, req, res, next)
```

Express identifies error middleware by the four-parameter function signature.

## Real Project Usage

In real APIs, error handling is used to:

- Return `400 Bad Request` for invalid input
- Return `404 Not Found` for missing resources
- Return `500 Internal Server Error` for unexpected server problems
- Keep responses consistent
- Avoid exposing sensitive internal error details to users
- Log errors for debugging

## Summary

Error handling helps keep APIs stable and predictable. We can handle simple errors directly in routes, use `try...catch` for risky code, and use centralized error middleware to handle unexpected errors in one place.

## Practice Questions

### Q1. What is error handling?

Error handling means detecting application problems and returning a proper response instead of letting the server crash.

### Q2. Which status code is commonly used for invalid client input?

`400 Bad Request`.

### Q3. Which status code is commonly used for unexpected server errors?

`500 Internal Server Error`.

### Q4. How many parameters does Express error-handling middleware have?

Four parameters: `error`, `req`, `res`, and `next`.

### Q5. Should we expose internal server error details to users?

No. We should send a safe message to users and log the real error on the server side.
