# 02 - Node.js Syntax

Node.js uses JavaScript syntax. The main difference is that the code runs outside the browser, usually from a terminal.

In Node.js, we can write normal JavaScript like variables, functions, arrays, objects, conditions, loops, and console logs.

## Simple Definition

Node.js syntax means writing JavaScript code that runs in the Node.js runtime instead of the browser.

## Key Points

- Node.js uses JavaScript syntax.
- We can run files using the `node` command or tools like `tsx` for TypeScript.
- `console.log()` is commonly used to print output in the terminal.
- Browser APIs like `document` and `window` are not available in Node.js.
- Node.js provides its own APIs for backend work, like file system, path, OS, HTTP, and process.

## Example

```ts
const name = "Ahmed";
const role = "Frontend Engineer";

function introduceUser(userName: string, userRole: string) {
  return `My name is ${userName} and I am a ${userRole}.`;
}

console.log(introduceUser(name, role));
```

## Summary

Node.js syntax is mostly normal JavaScript syntax, but it runs in the Node.js environment. Instead of browser features like DOM, Node.js gives us server-side features like file system, OS, process, and HTTP modules.

## Practice Questions

### Q1. Is Node.js a different language from JavaScript?

No. Node.js is not a different language. It is a runtime that runs JavaScript outside the browser.

### Q2. Can we use `document.querySelector()` in Node.js?

No. `document.querySelector()` is a browser DOM API. It is not available in Node.js by default.

### Q3. How do we print output in Node.js?

We commonly use `console.log()` to print output in the terminal.
