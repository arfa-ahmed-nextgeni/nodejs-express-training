# Practice Task - Send Response

## Task 1

Create:

```txt
17-send-response/src/index.ts
```

## Task 2

Create this text response endpoint:

```txt
GET /text
```

It should return:

```txt
Hello Express
```

using `res.send()`.

## Task 3

Create this JSON response endpoint:

```txt
GET /json
```

It should return:

```json
{
  "framework": "Express",
  "language": "TypeScript"
}
```

using `res.json()`.

## Task 4

Create this created response endpoint:

```txt
POST /users
```

It should return status `201` with:

```json
{
  "message": "User created"
}
```

using `res.status(201).json(...)`.

## Task 5

Add script in `package.json`:

```json
"dev:response": "tsx 17-send-response/src/index.ts"
```

## Task 6

Run:

```bash
npm run dev:response
```

Test these endpoints:

```txt
GET  http://localhost:3006/text
GET  http://localhost:3006/json
POST http://localhost:3006/users
```

## Expected Understanding

After this topic, I should be able to:

- Use `res.send()`
- Use `res.json()`
- Use `res.status()`
- Understand which response method is suitable for plain text vs JSON APIs
