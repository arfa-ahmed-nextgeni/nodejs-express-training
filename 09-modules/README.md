# 09 - Modules

A module is a reusable file that contains code such as variables, functions, classes, or objects.

Modules help us split code into smaller files instead of writing everything in one large file.

## Simple Definition

A module is a separate file that can export code and allow other files to import and use that code.

## Why We Use Modules

- To organize code into smaller files
- To reuse code in different places
- To keep code easier to read and maintain
- To avoid writing everything in one file
- To separate responsibilities

## CommonJS

CommonJS is the older module system used in Node.js.

```js
const math = require("./math");

console.log(math.add(2, 3));
```

Export example:

```js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

## ES Modules

ES Modules use `import` and `export`. This is commonly used in modern JavaScript, TypeScript, React, Next.js, and modern Node.js projects.

```ts
import { add } from "./math.js";

console.log(add(2, 3));
```

Export example:

```ts
export function add(a: number, b: number) {
  return a + b;
}
```

## Named Export

Named export exports one or more values by name.

```ts
export function add(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a - b;
}
```

Import named exports using braces:

```ts
import { add, subtract } from "./math.js";
```

## Default Export

Default export exports one main value from a file.

```ts
export default function greet() {
  return "Hello";
}
```

Import default export without braces:

```ts
import greet from "./greet.js";
```

## Summary

Modules help us organize and reuse code. CommonJS uses `require` and `module.exports`. ES Modules use `import` and `export`. Named exports are imported with braces, while default exports are imported without braces.

## Practice Questions

### Q1. What is a module?

A module is a reusable file that exports variables, functions, classes, or objects so they can be used when needed in other files.

### Q2. Why do we use modules?

We use modules to better organize code, reuse code, and avoid writing everything in one large file.

### Q3. What is the difference between CommonJS and ES Modules?

CommonJS is the older JavaScript module system used in Node.js. It uses `require` and `module.exports`.

ES Modules are the modern JavaScript module system. They use `import` and `export` keywords.

### Q4. What is the difference between named export and default export?

Named export exports a variable, function, class, or object with a specific name. When importing it, we use the same exported name inside braces.

Default export exports one main value from a file. When importing it, we do not use braces and we can choose any import name.
