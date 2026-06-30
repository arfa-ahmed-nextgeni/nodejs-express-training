# Practice Task - Error Handling

## Task 1

Create:

```txt
23-error-handling/src/index.ts
```

## Task 2

Create a route with a validation error:

```txt
POST /users
```

If `email` is missing from `req.body`, return:

```json
{
  "message": "Email is required"
}
```

with status code `400`.

If email exists, return:

```json
{
  "message": "User created"
}
```

with status code `201`.

## Task 3

Create a route that uses `try...catch`:

```txt
GET /try-catch-error
```

Inside the route, throw an error and catch it.

Return:

```json
{
  "message": "Internal Server Error"
}
```

with status code `500`.

## Task 4

Create a route that passes an error to centralized error middleware:

```txt
GET /central-error
```

Inside this route, call:

```ts
next(new Error("Central error example"));
```

## Task 5

Create centralized error-handling middleware at the end of the file.

It should log the error and return:

```json
{
  "message": "Something went wrong"
}
```

with status code `500`.

Remember: error middleware has four parameters:

```ts
(error, req, res, next)
```

## Task 6

Add script in `package.json`:

```json
"dev:error-handling": "tsx 23-error-handling/src/index.ts"
```

## Task 7

Run:

```bash
npm run dev:error-handling
```

Test these endpoints:

```txt
POST http://localhost:3000/users
GET  http://localhost:3000/try-catch-error
GET  http://localhost:3000/central-error
```

## Expected Understanding

After this topic, I should be able to:

- Return validation errors
- Use `try...catch`
- Use `next(error)`
- Create centralized error-handling middleware
- Understand why error middleware has four parameters
