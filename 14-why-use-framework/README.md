# 14 - Why Use Framework

Node.js already has a built-in `http` module, so we can create servers without using Express.js. However, using only the `http` module requires more manual code for routing, request handling, response handling, middleware-like behavior, and error handling.

A framework like Express.js provides ready-made helpers and structure so we can build APIs faster and maintain them more easily.

## Simple Definition

A framework provides structure and reusable features that make application development easier.

## Why Use a Framework?

- To reduce repetitive code
- To organize routes clearly
- To handle requests and responses more easily
- To use middleware
- To improve maintainability
- To avoid writing the same low-level logic again and again

## Native `http` Module vs Express.js

### Native `http` Module

With the native `http` module, we often need to manually check the request method and URL.

```ts
if (req.method === "GET" && req.url === "/users") {
  // handle users route
}
```

With many routes, this can become difficult to maintain.

### Express.js

Express gives us cleaner route methods.

```ts
app.get("/users", handler);
app.post("/users", handler);
app.get("/products", handler);
```

This is easier to read, organize, and maintain.

## Routing Benefit

Routing is one of the biggest reasons developers use Express.js. Instead of writing many `if/else` checks for URLs and methods, Express lets us define routes clearly using methods like:

- `app.get()`
- `app.post()`
- `app.put()`
- `app.patch()`
- `app.delete()`

## Summary

Node.js can build servers using the native `http` module, but Express.js provides routing, middleware, and request/response helpers that reduce code and make applications easier to maintain.

## Practice Questions

### Q1. Why was Express.js created if Node.js already has the `http` module?

Express.js was created to simplify server development by providing routing, middleware, and request/response helpers on top of Node.js.

### Q2. Which is easier to maintain for many routes: native `http` module or Express.js?

Express.js is easier to maintain because it needs less code and provides a cleaner, more structured way to define routes.

### Q3. Which Express feature saves a lot of manual code compared to the native `http` module?

Routing saves a lot of manual code because with the native `http` module we often need to manually check the requested URL and HTTP method.

### Q4. Why do frameworks improve maintainability?

Frameworks provide structure and reusable features, so code is easier to organize, understand, and update.
