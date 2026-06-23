# 13 - Hello World

Hello World is the simplest first route we create when learning Express.js.

It confirms that Express is installed, the server starts correctly, and the browser or API client can receive a response.

## Simple Definition

Hello World in Express means creating a basic server route that returns a simple response.

## Key Points

- `express()` creates an Express app.
- `app.get()` creates a GET route.
- `res.send()` sends a response to the client.
- `app.listen()` starts the server on a port.

## Example

```ts
import express from "express";

const app = express();
const PORT = 3003;

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## Run Command

```bash
npm run dev:hello
```

Then open:

```txt
http://localhost:3003
```

Expected response:

```txt
Hello World
```

## Summary

A Hello World Express app is the smallest working Express server. It helps confirm that the server is running and can return a response from a route.

## Practice Questions

### Q1. What is the purpose of a Hello World route?

It confirms that the Express server is running and can send a response.

### Q2. Which method is used to create a GET route in Express?

We use `app.get()` to create a GET route.

### Q3. Which method sends a simple text response?

We can use `res.send()` to send a simple text response.

### Q4. What does `/` mean in `app.get("/", ...)`?

`/` is the root route of the server.
