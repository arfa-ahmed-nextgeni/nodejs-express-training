# Practice Task - Express Router

## Task 1

Create this folder structure:

```txt
37-express-router/
  src/
    index.ts
    routes/
      user.routes.ts
      product.routes.ts
```

## Task 2

In `src/routes/user.routes.ts`, import Router:

```ts
import { Router } from "express";
```

Create and export router:

```ts
const router = Router();

export default router;
```

## Task 3

In `user.routes.ts`, create this route:

```txt
GET /
```

Return:

```json
{
  "message": "Get all users"
}
```

## Task 4

In `user.routes.ts`, create this route:

```txt
GET /:id
```

Return:

```json
{
  "message": "Get single user",
  "userId": "1"
}
```

Use:

```ts
req.params.id
```

## Task 5

In `src/routes/product.routes.ts`, create a router like the user router.

Create this route:

```txt
GET /
```

Return:

```json
{
  "message": "Get all products"
}
```

## Task 6

In `product.routes.ts`, create this route:

```txt
GET /:id
```

Return:

```json
{
  "message": "Get single product",
  "productId": "10"
}
```

Use:

```ts
req.params.id
```

## Task 7

In `src/index.ts`, import Express and route files:

```ts
import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
```

## Task 8

In `src/index.ts`, mount routes:

```ts
app.use("/users", userRoutes);
app.use("/products", productRoutes);
```

## Task 9

Create root route in `src/index.ts`:

```txt
GET /
```

Return:

```json
{
  "message": "Express Router topic"
}
```

## Task 10

Add script in `package.json`:

```json
"dev:router": "tsx 37-express-router/src/index.ts"
```

## Test URLs

```txt
GET http://localhost:3000/
GET http://localhost:3000/users
GET http://localhost:3000/users/1
GET http://localhost:3000/products
GET http://localhost:3000/products/10
```

## Expected Understanding

After this topic, I should be able to:

- Explain Express Router
- Create separate route files
- Export a router
- Import route files in `index.ts`
- Mount routes using `app.use()`
- Understand route prefixing
