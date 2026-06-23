# 11 - Express.js

Express.js is a lightweight framework for Node.js used to build web servers and APIs.

Node.js has a built-in `http` module, so we can create servers without Express. But Express makes routing, request handling, response handling, middleware, and error handling easier.

## Simple Definition

Express.js is a Node.js framework that helps us build APIs and web servers with less code and better structure.

## Why We Use Express.js

- To create API routes easily
- To handle requests and responses easily
- To use middleware
- To organize backend code better
- To avoid writing too much low-level server code with the native `http` module

## Express.js vs Node.js `http` Module

### Native Node.js `http` Module

- Built into Node.js
- More low-level
- Requires more manual work
- Routing and response handling are more verbose

### Express.js

- Built on top of Node.js
- Easier and cleaner syntax
- Provides routing helpers
- Provides middleware support
- Commonly used for REST APIs

## Example Idea

Without Express, we need to manually check request URLs and methods.

With Express, we can write routes more clearly:

```ts
app.get("/users", (req, res) => {
  res.json({ message: "Users route" });
});
```

## Summary

Express.js is a minimal and flexible Node.js framework used to build APIs and web servers. It simplifies routing, middleware, request handling, and response handling compared to using the native Node.js `http` module directly.

## Practice Questions

### Q1. What is Express.js?

Express.js is a lightweight Node.js framework used to build APIs and web servers.

### Q2. Why do we use Express.js?

We use Express.js because it makes routing, request handling, response handling, middleware, and error handling easier.

### Q3. Can we build a server without Express.js?

Yes. Node.js has a built-in `http` module, but Express makes server and API development easier and cleaner.

### Q4. Is Express.js a separate runtime like Node.js?

No. Express.js is not a runtime. It is a framework that runs on top of Node.js.
