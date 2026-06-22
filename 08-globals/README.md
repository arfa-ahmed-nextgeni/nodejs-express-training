# 08 - Globals

Globals are values or functions that are available in Node.js without importing them manually.

Node.js provides some global objects and functions like `console`, `process`, `setTimeout`, `setInterval`, and `global`.

In CommonJS files, Node.js also provides `__dirname` and `__filename`. In ES modules, `__dirname` and `__filename` are not available directly.

## Simple Definition

Globals are built-in values or functions that we can use directly in Node.js without importing them.

## Common Node.js Globals

- **console**: Used to print logs in the terminal.
- **process**: Provides information about the current Node.js process.
- **global**: The global object in Node.js.
- **setTimeout**: Runs a callback after a delay.
- **setInterval**: Runs a callback repeatedly after a fixed interval.
- **__dirname**: Directory path of the current file in CommonJS.
- **__filename**: Full path of the current file in CommonJS.

## CommonJS vs ES Modules

### CommonJS

In CommonJS, `__dirname` and `__filename` are available directly.

```js
console.log(__dirname);
console.log(__filename);
```

### ES Modules

In ES modules, `__dirname` and `__filename` are not available directly. We can recreate them using `import.meta.url`.

```ts
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);
```

## Examples

```ts
console.log("Hello from Node.js");
console.log(process.version);
console.log(process.cwd());
console.log(process.env.NODE_ENV);

setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);
```

## Summary

Node.js globals are built-in values and functions available without manual imports. Some globals like `console`, `process`, `setTimeout`, and `global` are available generally, while `__dirname` and `__filename` are directly available in CommonJS but not directly in ES modules.

## Practice Questions

### Q1. What are globals in Node.js?

Globals are built-in objects and functions that we can use directly in Node.js code without importing them.

### Q2. What is `process` used for?

`process` gives information and control related to the current Node.js process. For example, we can use it to read environment variables, get the current working directory, check the Node.js version, or read process/memory information.

Examples:

```ts
console.log(process.env.NODE_ENV);
console.log(process.cwd());
console.log(process.version);
console.log(process.memoryUsage());
```

### Q3. What is the difference between `__dirname` and `__filename`?

`__dirname` gives the directory path of the current file.

`__filename` gives the full path of the current file.

### Q4. Why does `console.log(__dirname)` not work directly in this project?

Because this project uses ES modules with `"type": "module"`. In ES modules, `__dirname` and `__filename` are not available directly. We can recreate them using `import.meta.url`, `fileURLToPath`, and `path.dirname`.
