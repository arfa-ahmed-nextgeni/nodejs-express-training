# 24 - Validation

## Objective

Learn how to validate incoming request data in an Express.js API using Zod.

## Theory

Validation means checking client input before using it in the application.

Client data can come from:

- `req.body`
- `req.params`
- `req.query`

We should validate this data because clients can send missing, invalid, or unexpected values.

Example invalid request body:

```json
{
  "email": "not-an-email",
  "password": "123"
}
```

If we do not validate input, our API may save bad data, crash, or behave incorrectly.

## Why Use Zod?

Zod is a TypeScript-friendly validation library.

It allows us to define a schema and check whether incoming data matches that schema.

Example:

```ts
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});
```

## Using `safeParse()`

`safeParse()` validates data without throwing an error.

```ts
const result = createUserSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    message: "Invalid request body",
    errors: result.error.issues
  });
}
```

If validation succeeds, we can safely use:

```ts
result.data
```

## Example Route

```ts
app.post("/users", (req, res) => {
  const result = createUserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid request body",
      errors: result.error.issues
    });
  }

  return res.status(201).json({
    message: "User created",
    user: result.data
  });
});
```

## Real Project Usage

Validation is used in real APIs to:

- Check required fields
- Check email format
- Check password length
- Validate route parameters
- Validate query parameters
- Prevent bad data from entering the system
- Return clear error messages to the client

## Summary

Validation protects the API from invalid client input. Zod lets us define schemas and validate incoming data in a TypeScript-friendly way. If validation fails, we usually return `400 Bad Request`.

## Practice Questions

### Q1. What is validation?

Validation means checking client input before using it in the application.

### Q2. Why do we validate request data?

We validate request data to prevent invalid, missing, or unexpected data from being processed or saved.

### Q3. Which status code is commonly used when validation fails?

`400 Bad Request`.

### Q4. What does Zod help us do?

Zod helps us define schemas and validate data against those schemas.

### Q5. What is the benefit of `safeParse()`?

`safeParse()` validates data without throwing an error and returns a success/failure result.
