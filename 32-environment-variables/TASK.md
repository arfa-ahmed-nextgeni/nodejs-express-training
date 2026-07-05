# Practice Task - Environment Variables

## Task 1

Install dotenv:

```bash
npm install dotenv
```

## Task 2

Create:

```txt
32-environment-variables/src/index.ts
```

## Task 3

Import and configure dotenv:

```ts
import dotenv from "dotenv";

dotenv.config();
```

## Task 4

Read values from environment variables:

```ts
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Express Training App";
const NODE_ENV = process.env.NODE_ENV || "development";
```

## Task 5

Create this route:

```txt
GET /
```

Return:

```json
{
  "message": "Environment variables topic",
  "appName": "Express Training App",
  "environment": "development"
}
```

Use `APP_NAME` and `NODE_ENV` variables in response.

## Task 6

Create this route:

```txt
GET /config
```

Return:

```json
{
  "port": 3000,
  "appName": "Express Training App",
  "environment": "development"
}
```

## Task 7

Create a local `.env` file in your project root for testing:

```txt
PORT=3000
APP_NAME=Node Express Practice
NODE_ENV=development
```

Important: Do not add real secrets to `.env` in a public repository.

## Task 8

Add script in `package.json`:

```json
"dev:env": "tsx 32-environment-variables/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain environment variables
- Use `process.env`
- Load `.env` values using `dotenv`
- Use fallback values
- Understand why real secrets should not be committed
