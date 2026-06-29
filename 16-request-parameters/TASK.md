# Practice Task - Request Parameters

## Task 1

Create:

```txt
16-request-parameters/src/index.ts
```

## Task 2

Add JSON body parsing middleware:

```ts
app.use(express.json());
```

## Task 3

Create this route parameter endpoint:

```txt
GET /users/:id
```

It should return the user ID from `req.params.id`.

## Task 4

Create this query parameter endpoint:

```txt
GET /products?page=2&limit=10
```

It should return `page` and `limit` from `req.query`.

## Task 5

Create this request body endpoint:

```txt
POST /users
```

It should return the received request body using `req.body`.

## Task 6

Add script in `package.json`:

```json
"dev:params": "tsx 16-request-parameters/src/index.ts"
```

## Task 7

Run:

```bash
npm run dev:params
```

Test these endpoints:

```txt
GET  http://localhost:3005/users/15
GET  http://localhost:3005/products?page=2&limit=10
POST http://localhost:3005/users
```

Example POST body:

```json
{
  "name": "Ali",
  "age": 25
}
```

## Expected Understanding

After this topic, I should be able to:

- Explain `req.params`
- Explain `req.query`
- Explain `req.body`
- Use `express.json()`
- Read client data from route path, URL query, and request body
