# 17 - Send Response

A response is the data that the server sends back to the client after handling a request.

In Express.js, we commonly use `res.send()`, `res.json()`, and `res.status()` to send responses.

## Simple Definition

Sending a response means returning data from the server to the client using the Express response object.

## Common Response Methods

### `res.send()`

`res.send()` sends a simple response such as plain text, HTML, or other basic content.

```ts
app.get("/text", (_req, res) => {
  res.send("Hello Express");
});
```

### `res.json()`

`res.json()` sends a JSON response. It is commonly used in REST APIs.

```ts
app.get("/json", (_req, res) => {
  res.json({
    framework: "Express",
    language: "TypeScript"
  });
});
```

### `res.status()`

`res.status()` sets the HTTP status code. It is commonly chained with `res.json()` or `res.send()`.

```ts
app.post("/users", (_req, res) => {
  res.status(201).json({
    message: "User created"
  });
});
```

## When to Use Each Method

| Method | Use when |
| --- | --- |
| `res.send()` | Sending plain text, HTML, or simple responses |
| `res.json()` | Returning objects or arrays in REST APIs |
| `res.status()` | Setting the correct HTTP status code |

## `res.send()` vs `res.json()`

`res.send()` can also send objects, but `res.json()` clearly shows that the API is returning JSON.

For REST APIs, `res.json()` is usually preferred because JSON is easy for frontend apps, mobile apps, and other services to read.

## Summary

Express provides response helper methods like `res.send()`, `res.json()`, and `res.status()`. `res.send()` is useful for simple text responses, `res.json()` is preferred for REST API JSON responses, and `res.status()` is used to set HTTP status codes.

## Practice Questions

### Q1. Which method is better for REST APIs?

`res.json()` is better for REST APIs.

### Q2. Why is `res.json()` better for REST APIs?

Because JSON is the standard response format for APIs and is easy for clients to read and process.

### Q3. Which method would you use to send plain text?

`res.send()` is commonly used to send plain text.

### Q4. Can we combine `res.status()` with `res.json()`?

Yes. Example: `res.status(201).json({ message: "User created" })`.

### Q5. What does `res.status(201)` mean?

It sets the response status code to `201 Created`, commonly used when a new resource is created.
