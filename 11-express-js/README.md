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

Express.js is a Node.js framework used to build web APIs and web servers using built-in helper functions with minimal code.

### Q2. Why do we use Express.js instead of only the Node.js `http` module?

With the native Node.js `http` module, we need to write more manual code for routing, request handling, and response handling. Express provides built-in helpers, so we can build the same API with less code and cleaner structure.

### Q3. What is the difference between Node.js and Express.js?

Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.

Express.js is a framework that runs on top of Node.js and helps us build APIs and web servers more easily.

### Q4. Can we build a server without Express.js?

Yes. We can build a server using the built-in Node.js `http` module. But without Express, the code is usually longer, more manual, and harder to maintain.

### Q5. Is Express.js a separate runtime like Node.js?

No. Express.js is not a runtime. It is a framework that runs on top of Node.js.
