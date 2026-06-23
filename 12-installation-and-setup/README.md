# 12 - Installation and Setup

This topic covers how to install Express.js and set up a basic Express server in a Node.js + TypeScript project.

## Simple Definition

Installation and setup means preparing the project with the required packages, scripts, and starter server file so we can run an Express app.

## Required Packages

For Express with TypeScript, we need:

```bash
npm install express
npm install -D typescript tsx @types/node @types/express
```

## Why These Packages Are Needed

- **express**: Main Express.js framework.
- **typescript**: Adds TypeScript support.
- **tsx**: Runs TypeScript files directly during development.
- **@types/node**: Provides TypeScript types for Node.js.
- **@types/express**: Provides TypeScript types for Express.

## Basic Setup

```ts
import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (_req, res) => {
  res.send("Express setup is working");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## Run Command

```bash
npm run dev:setup
```

Then open:

```txt
http://localhost:3002
```

## Summary

To set up Express, we install Express and TypeScript-related packages, create an Express app using `express()`, define a route, and start the server using `app.listen()`.

## Practice Questions

### Q1. Which package do we install to use Express.js?

We install the `express` package.

### Q2. Why do we install `@types/express`?

We install `@types/express` to get TypeScript type definitions for Express.

### Q3. Why do we use `tsx`?

We use `tsx` to run TypeScript files directly during development without manually compiling first.

### Q4. What does `app.listen()` do?

`app.listen()` starts the Express server and makes it listen for incoming requests on a specific port.
