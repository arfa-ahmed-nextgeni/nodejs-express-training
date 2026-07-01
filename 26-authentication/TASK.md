# Practice Task - Authentication

## Task 1

Create:

```txt
26-authentication/src/index.ts
```

## Task 2

Create an authentication middleware named `auth`.

It should read the token from:

```ts
req.headers.authorization
```

Expected valid token:

```txt
Bearer my-secret-token
```

## Task 3

If token is missing or invalid, return status `401`:

```json
{
  "message": "Unauthorized"
}
```

Important: use `return` so the request stops.

## Task 4

If token is valid, call:

```ts
next();
```

## Task 5

Create this public route:

```txt
GET /
```

Return:

```json
{
  "message": "Public route"
}
```

## Task 6

Create this protected route:

```txt
GET /profile
```

Use the `auth` middleware.

If token is valid, return:

```json
{
  "message": "Profile data"
}
```

## Task 7

Add script in `package.json`:

```json
"dev:auth": "tsx 26-authentication/src/index.ts"
```

## Task 8

Run:

```bash
npm run dev:auth
```

Test without token:

```txt
GET http://localhost:3000/profile
```

Expected: `401 Unauthorized`.

Test with header:

```txt
Authorization: Bearer my-secret-token
```

Expected: `200 OK` with profile data.

## Expected Understanding

After this topic, I should be able to:

- Explain authentication
- Read token from request headers
- Create simple authentication middleware
- Protect a route using middleware
- Understand when to return `401 Unauthorized`
