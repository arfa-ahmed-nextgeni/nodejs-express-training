# 37 - Express Router

## Objective

Learn how to split Express routes into separate files using `Router`.

## Why Express Router?

In small examples, we can write all routes in `index.ts`.

Example:

```ts
app.get("/users", (req, res) => {
  res.json({ message: "Get users" });
});
```

This is okay for learning small topics.

But in real projects, many routes in one file become hard to manage.

Express Router helps us split routes into separate files.

## What is Router?

`Router` is like a mini Express app.

It can have its own routes.

Example:

```ts
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Users route" });
});

export default router;
```

## Mounting Router in index.ts

After creating a router file, we connect it in `index.ts` using `app.use()`.

Example:

```ts
import userRoutes from "./routes/user.routes.js";

app.use("/users", userRoutes);
```

This means all routes inside `userRoutes` start with `/users`.

## Example Route Mapping

In `index.ts`:

```ts
app.use("/users", userRoutes);
```

In `user.routes.ts`:

```ts
router.get("/", handler);
```

Final URL:

```txt
GET /users
```

Another example:

```ts
router.get("/:id", handler);
```

Final URL:

```txt
GET /users/:id
```

## Folder Structure

Simple structure:

```txt
src/
  index.ts
  routes/
    user.routes.ts
    product.routes.ts
```

## Benefits

Express Router helps with:

- Cleaner code
- Better file organization
- Easier route management
- Easier testing
- Better project structure

## Real Project Usage

In real projects, we usually split code like this:

```txt
src/
  index.ts
  routes/
  controllers/
  services/
  middleware/
```

For now, we only practice `routes`.

Later, we can move business logic into controllers and services.

## Summary

Express Router is used to organize routes into separate files. It keeps `index.ts` clean and makes the project easier to maintain. `app.use()` is used to mount router files on a base path.

## Practice Questions

### Q1. What is Express Router used for?

It is used to split routes into separate files.

### Q2. Which Express method mounts a router?

`app.use()`.

### Q3. If we write `app.use("/users", userRoutes)` and inside router `router.get("/")`, what is the final route?

`GET /users`.

### Q4. Is keeping all routes in `index.ts` required?

No. It is okay for small examples, but bigger apps should split routes.

### Q5. What is one benefit of Express Router?

It keeps code cleaner and easier to manage.
