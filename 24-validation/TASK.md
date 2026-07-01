# Practice Task - Validation

## Task 1

Install Zod:

```bash
npm install zod
```

## Task 2

Create:

```txt
24-validation/src/index.ts
```

## Task 3

Create a Zod schema for creating a user:

```ts
const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});
```

## Task 4

Create this route:

```txt
POST /users
```

Validate `req.body` using:

```ts
createUserSchema.safeParse(req.body)
```

## Task 5

If validation fails, return status `400`:

```json
{
  "message": "Invalid request body",
  "errors": []
}
```

Use `result.error.issues` for the `errors` value.

## Task 6

If validation succeeds, return status `201`:

```json
{
  "message": "User created",
  "user": {}
}
```

Use `result.data` for the `user` value.

## Task 7

Add script in `package.json`:

```json
"dev:validation": "tsx 24-validation/src/index.ts"
```

## Task 8

Run:

```bash
npm run dev:validation
```

Test invalid body:

```json
{
  "name": "A",
  "email": "wrong-email",
  "password": "123"
}
```

Expected: `400 Bad Request`.

Test valid body:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com",
  "password": "123456"
}
```

Expected: `201 Created`.

## Expected Understanding

After this topic, I should be able to:

- Explain validation
- Use Zod schemas
- Validate `req.body`
- Use `safeParse()`
- Return proper validation errors
