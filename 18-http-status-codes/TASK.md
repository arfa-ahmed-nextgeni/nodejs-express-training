# Practice Task - HTTP Status Codes

## Task 1

Create:

```txt
18-http-status-codes/src/index.ts
```

## Task 2

Create these endpoints:

```txt
GET    /success
POST   /users
DELETE /users/:id
GET    /bad-request
GET    /unauthorized
GET    /forbidden
GET    /not-found
GET    /server-error
```

## Task 3

Use these status codes:

```txt
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
```

## Task 4

Important:

For `204 No Content`, do not send a response body.

Use:

```ts
res.status(204).send();
```

## Task 5

Add script in `package.json`:

```json
"dev:status": "tsx 18-http-status-codes/src/index.ts"
```

## Task 6

Run:

```bash
npm run dev:status
```

Test these endpoints:

```txt
GET    http://localhost:3007/success
POST   http://localhost:3007/users
DELETE http://localhost:3007/users/5
GET    http://localhost:3007/bad-request
GET    http://localhost:3007/unauthorized
GET    http://localhost:3007/forbidden
GET    http://localhost:3007/not-found
GET    http://localhost:3007/server-error
```

## Expected Understanding

After this topic, I should be able to:

- Use `res.status()` correctly
- Choose correct success status codes
- Choose correct client error status codes
- Choose correct server error status codes
- Understand why `204` should not return a body
