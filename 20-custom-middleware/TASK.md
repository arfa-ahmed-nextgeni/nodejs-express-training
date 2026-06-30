# Practice Task - Custom Middleware

## Task 1

Create:

```txt
20-custom-middleware/src/index.ts
```

## Task 2

Create a reusable logger middleware.

It should log the request method and URL:

```ts
function logger(req, _res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
```

## Task 3

Create a reusable auth middleware.

For practice, hardcode:

```ts
const isLoggedIn = false;
```

If the user is not logged in, return:

```ts
return res.status(401).send("Unauthorized");
```

If the user is logged in, call:

```ts
next();
```

## Task 4

Create this public route:

```txt
GET /
```

Use only the `logger` middleware.

Return:

```txt
Welcome
```

## Task 5

Create this protected route:

```txt
GET /admin
```

Use both `logger` and `auth` middleware.

Return this only when auth allows the request:

```txt
Admin Dashboard
```

## Task 6

Test with:

```ts
const isLoggedIn = false;
```

Expected response for `/admin`:

```txt
Unauthorized
```

Then change to:

```ts
const isLoggedIn = true;
```

Expected response for `/admin`:

```txt
Admin Dashboard
```

## Task 7

Add script in `package.json`:

```json
"dev:custom-middleware": "tsx 20-custom-middleware/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Create custom middleware
- Reuse middleware across routes
- Understand when to call `next()`
- Understand when to stop the request by sending a response
- Create a simple authentication middleware
