# 21 - Third-party Middleware

## Objective

Learn how to use middleware provided by external npm packages in an Express.js application.

## Theory

Third-party middleware is middleware provided by external libraries instead of being written by us.

In Express.js projects, third-party middleware is commonly used to add features like security headers, request logging, and CORS support.

In this topic, we use:

- `helmet`
- `morgan`
- `cors`

## Example

```ts
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
```

## Middleware Packages

### `helmet`

`helmet` adds security-related HTTP headers to Express responses.

It helps improve security against some common web vulnerabilities.

### `morgan`

`morgan` logs incoming HTTP requests in the terminal.

Example log:

```txt
GET / 200 5.123 ms
```

This is useful for development, debugging, and request inspection.

### `cors`

`cors` allows the backend to accept requests from frontend applications running on a different origin.

Example:

```txt
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

Without CORS support, the browser may block frontend requests to the backend.

## Real Project Usage

- `helmet` is commonly used in production APIs to improve security headers.
- `morgan` is commonly used during development to log request details.
- `cors` is commonly used when the frontend and backend are hosted on different domains, ports, or protocols.

## Summary

Third-party middleware comes from external npm packages. In this topic, `helmet` improves security headers, `morgan` logs requests, and `cors` enables cross-origin requests.

## Practice Questions

### Q1. What is third-party middleware?

Third-party middleware is middleware provided by external npm packages instead of being written by us.

### Q2. Why do we use `helmet`?

We use `helmet` to add security-related HTTP response headers.

### Q3. Why do we use `morgan`?

We use `morgan` to log incoming HTTP requests.

### Q4. Why do we use `cors`?

We use `cors` to allow frontend applications on different origins to communicate with the backend.
