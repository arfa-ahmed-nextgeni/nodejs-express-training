# Practice Task - Middleware

## Task 1

Create:

```txt
19-middleware/src/index.ts
```

## Task 2

Create application-level middleware using `app.use()`.

It should log:

```txt
Application middleware
```

This middleware should run for every request.

## Task 3

Create custom route-level middleware named `auth`.

It should log:

```txt
Auth middleware
```

This middleware should only run for the `/admin` route.

## Task 4

Create this route:

```txt
GET /
```

It should return:

```txt
Home Page
```

Expected console output:

```txt
Application middleware
```

## Task 5

Create this route:

```txt
GET /admin
```

It should use the `auth` middleware and return:

```txt
Admin Page
```

Expected console output:

```txt
Application middleware
Auth middleware
```

## Task 6

Add script in `package.json`:

```json
"dev:middleware": "tsx 19-middleware/src/index.ts"
```

## Task 7

Run:

```bash
npm run dev:middleware
```

Test:

```txt
GET http://localhost:3008/
GET http://localhost:3008/admin
```

## Expected Understanding

After this topic, I should be able to:

- Explain middleware
- Use `app.use()` middleware
- Create custom middleware
- Explain `next()`
- Understand application-level middleware
- Understand route-level middleware
