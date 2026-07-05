# Practice Task - SQL vs NoSQL

## Task 1

Create this folder structure:

```txt
38-sql-vs-nosql/
  src/
    index.ts
    routes/
      database.routes.ts
```

This topic also continues Express Router practice.

## Task 2

In `src/routes/database.routes.ts`, import Router:

```ts
import { Router } from "express";
```

Create and export router:

```ts
const router = Router();

export default router;
```

## Task 3

In `database.routes.ts`, create this route:

```txt
GET /comparison
```

Return:

```json
{
  "sql": {
    "description": "Stores data in tables with rows and columns",
    "examples": ["MySQL", "PostgreSQL"]
  },
  "nosql": {
    "description": "Stores data in flexible formats like documents or key-value data",
    "examples": ["MongoDB", "Redis"]
  }
}
```

## Task 4

In `database.routes.ts`, create this route:

```txt
GET /advantages
```

Return:

```json
{
  "sqlAdvantages": ["Good for relationships", "Supports joins", "Good for transactions"],
  "nosqlAdvantages": ["Flexible structure", "Good for changing data", "Can scale horizontally"]
}
```

## Task 5

In `database.routes.ts`, create this route:

```txt
GET /use-cases
```

Return:

```json
{
  "sqlUseCases": ["orders", "payments", "inventory"],
  "nosqlUseCases": ["logs", "events", "user preferences"]
}
```

## Task 6

In `src/index.ts`, import Express and the route file:

```ts
import express from "express";
import databaseRoutes from "./routes/database.routes.js";
```

## Task 7

In `src/index.ts`, mount routes:

```ts
app.use("/database", databaseRoutes);
```

## Task 8

Create root route in `src/index.ts`:

```txt
GET /
```

Return:

```json
{
  "message": "SQL vs NoSQL topic"
}
```

## Task 9

Add script in `package.json`:

```json
"dev:sql-nosql": "tsx 38-sql-vs-nosql/src/index.ts"
```

## Test URLs

```txt
GET http://localhost:3000/
GET http://localhost:3000/database/comparison
GET http://localhost:3000/database/advantages
GET http://localhost:3000/database/use-cases
```

## Expected Understanding

After this topic, I should be able to:

- Explain SQL
- Explain NoSQL
- Explain SQL vs NoSQL difference
- Give examples of both
- Explain advantages of both
- Explain common use cases
- Continue using separate route files
