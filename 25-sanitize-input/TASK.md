# Practice Task - Sanitize Input

## Task 1

Create:

```txt
25-sanitize-input/src/index.ts
```

## Task 2

Create this route:

```txt
POST /users
```

It should read these values from `req.body`:

```txt
name
email
```

## Task 3

Sanitize the input:

```ts
const sanitizedUser = {
  name: req.body.name.trim(),
  email: req.body.email.trim().toLowerCase()
};
```

## Task 4

Return the sanitized value:

```json
{
  "user": {
    "name": "Ahmed",
    "email": "ahmed@example.com"
  }
}
```

## Task 5

Add basic validation before sanitizing.

If `name` or `email` is missing, return status `400`:

```json
{
  "message": "Name and email are required"
}
```

## Task 6

Add script in `package.json`:

```json
"dev:sanitize": "tsx 25-sanitize-input/src/index.ts"
```

## Task 7

Run:

```bash
npm run dev:sanitize
```

Test with this body:

```json
{
  "name": "  Ahmed  ",
  "email": "  AHMED@EXAMPLE.COM  "
}
```

Expected response:

```json
{
  "user": {
    "name": "Ahmed",
    "email": "ahmed@example.com"
  }
}
```

## Expected Understanding

After this topic, I should be able to:

- Explain sanitization
- Trim input values
- Normalize email values
- Understand the difference between validation and sanitization
- Use validation and sanitization together
