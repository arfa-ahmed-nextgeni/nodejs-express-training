# 32 - Environment Variables

## Objective

Learn how to use environment variables in a Node.js and Express.js application.

## Theory

Environment variables are values that come from outside the code.

They are commonly used for configuration values such as:

- Port number
- Database URL
- JWT secret
- API keys
- App environment

Example:

```txt
PORT=3000
JWT_SECRET=demo-secret
NODE_ENV=development
```

Instead of hardcoding these values in code, we read them using:

```ts
process.env.PORT
process.env.JWT_SECRET
process.env.NODE_ENV
```

## Why Use Environment Variables?

Environment variables help keep configuration separate from source code.

This is useful because different environments may need different values.

Example:

```txt
Development -> PORT=3000
Staging     -> PORT=4000
Production  -> PORT=8080
```

## dotenv

In local development, we commonly use the `dotenv` package.

It loads variables from a `.env` file into `process.env`.

Example `.env` file:

```txt
PORT=3000
JWT_SECRET=local-demo-secret
```

Example usage:

```ts
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
```

## Important Security Note

Never commit real secrets to GitHub.

Examples of secrets:

- Real JWT secrets
- Database passwords
- API keys
- Payment keys
- Private tokens

For public repositories, use demo values only.

## Real Project Usage

Environment variables are used in real projects for:

- API base URLs
- Database connection strings
- JWT secrets
- Redis URLs
- Payment gateway keys
- Third-party service credentials
- Feature flags

## Summary

Environment variables allow us to configure an application without hardcoding values in source code. In Node.js, we read them using `process.env`. For local development, `dotenv` can load values from a `.env` file.

## Practice Questions

### Q1. What are environment variables?

Environment variables are external configuration values used by the application.

### Q2. How do we read environment variables in Node.js?

Using `process.env`.

### Q3. Which package loads `.env` files locally?

`dotenv`.

### Q4. Should real secrets be committed to GitHub?

No. Real secrets should never be committed to GitHub.

### Q5. Give two examples of values commonly stored in environment variables.

Port number and JWT secret.
