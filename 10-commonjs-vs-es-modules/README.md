# 10 - CommonJS vs ES Modules

CommonJS and ES Modules are two module systems used to share code between files in JavaScript and Node.js.

CommonJS is the older Node.js module system. ES Modules are the modern JavaScript module system.

## Simple Definition

- **CommonJS** uses `require()` and `module.exports`.
- **ES Modules** use `import` and `export`.

## CommonJS Example

```js
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

```js
// index.js
const { add } = require("./math");

console.log(add(2, 3));
```

## ES Modules Example

```ts
// math.ts
export function add(a: number, b: number) {
  return a + b;
}
```

```ts
// index.ts
import { add } from "./math.js";

console.log(add(2, 3));
```

## `type` in package.json

Node.js checks `package.json` to understand how `.js` files should be treated.

```json
{
  "type": "module"
}
```

When `type` is `module`, Node.js treats `.js` files as ES Modules.

If `type` is not set or is `commonjs`, Node.js treats `.js` files as CommonJS by default.

## Important Difference

### CommonJS

- Uses `require()`
- Uses `module.exports`
- `__dirname` and `__filename` are available directly
- Older Node.js style

### ES Modules

- Uses `import`
- Uses `export`
- `__dirname` and `__filename` are not available directly
- Modern JavaScript style
- Common in TypeScript, React, Next.js, and modern Node.js projects

## File Extensions

In Node.js ES Modules, imports often need file extensions after TypeScript is compiled to JavaScript.

Example:

```ts
import { add } from "./math.js";
```

Even if the source file is `math.ts`, the runtime output is usually `math.js`, so we write `.js` in the import path for Node.js ESM compatibility.

## Summary

CommonJS and ES Modules both help us split and reuse code. CommonJS uses `require` and `module.exports`, while ES Modules use `import` and `export`. Modern projects usually prefer ES Modules, especially with TypeScript and frontend frameworks.

## Practice Questions

### Q1. What is CommonJS?

CommonJS is the older Node.js module system that uses `require()` and `module.exports`.

### Q2. What are ES Modules?

ES Modules are the modern JavaScript module system that uses `import` and `export`.

### Q3. What does `"type": "module"` do in `package.json`?

It tells Node.js to treat `.js` files as ES Modules.

### Q4. Which module system is commonly used in modern TypeScript, React, and Next.js projects?

ES Modules are commonly used in modern TypeScript, React, and Next.js projects.
