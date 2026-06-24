# Practice Task - Routing

## Task 1

Explain in your own words:

- Route
- HTTP Method
- Endpoint

## Task 2

Create:

```txt
15-routing/src/index.ts
```

Create an Express server with these routes:

```txt
GET /users
POST /users
GET /products
DELETE /users/:id
```

## Task 3

Add a script:

```json
"dev:routing": "tsx 15-routing/src/index.ts"
```

## Task 4

Run:

```bash
npm run dev:routing
```

Test these endpoints in browser/Postman:

```txt
GET http://localhost:3004/users
POST http://localhost:3004/users
GET http://localhost:3004/products
DELETE http://localhost:3004/users/5
```

## Expected Understanding

After this topic, I should be able to:

- Create multiple Express routes
- Explain route, method, and endpoint
- Understand that Express matches both method and path
