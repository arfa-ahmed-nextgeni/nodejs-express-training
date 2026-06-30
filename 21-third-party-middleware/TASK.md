# Practice Task - Third-party Middleware

## Task 1

Install third-party middleware packages:

```bash
npm install helmet morgan cors
npm install -D @types/morgan @types/cors
```

## Task 2

Create:

```txt
21-third-party-middleware/src/index.ts
```

## Task 3

Import:

```ts
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
```

## Task 4

Use the middleware:

```ts
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
```

## Task 5

Create this route:

```txt
GET /
```

Return:

```txt
Hello from Express
```

## Task 6

Add script in `package.json`:

```json
"dev:third-party-middleware": "tsx 21-third-party-middleware/src/index.ts"
```

## Task 7

Run:

```bash
npm run dev:third-party-middleware
```

Test:

```txt
GET http://localhost:3000/
```

## Expected Understanding

After this topic, I should be able to:

- Explain third-party middleware
- Use `helmet`
- Use `morgan`
- Use `cors`
- Understand why third-party middleware is useful in real Express projects
