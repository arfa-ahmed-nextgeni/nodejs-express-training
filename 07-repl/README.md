# 07 - REPL

REPL stands for Read, Eval, Print, Loop.

It is an interactive Node.js shell where we can quickly run JavaScript code without creating a file.

## Simple Definition

REPL is a Node.js interactive environment where we can type JavaScript code and immediately see the result.

## What REPL Means

- **Read**: Reads the code we type.
- **Eval**: Evaluates or executes the code.
- **Print**: Prints the result.
- **Loop**: Waits for the next command and repeats the process.

## How to Open REPL

Run this command in the terminal:

```bash
node
```

Then try JavaScript directly:

```js
2 + 3
```

Output:

```txt
5
```

To exit REPL, use:

```bash
.exit
```

or press:

```txt
Ctrl + C twice
```

## Key Points

- REPL is useful for quick testing.
- We do not need to create a file.
- It helps test JavaScript expressions, functions, arrays, and objects.
- It is mostly used for learning, debugging, and quick experiments.

## Example

```js
const course = "Node.js";
course.toUpperCase();
```

Output:

```txt
'NODE.JS'
```

## Summary

REPL is a quick interactive way to run JavaScript in Node.js. It is useful for testing small code snippets, checking syntax, and learning JavaScript/Node.js behavior.

## Practice Questions

### Q1. What does REPL stand for?

REPL stands for Read, Eval, Print, Loop.

### Q2. Why do we use REPL?

We use REPL to quickly test JavaScript code without creating a file.

### Q3. How do we open Node.js REPL?

We open it by running `node` in the terminal.

### Q4. How do we exit Node.js REPL?

We can type `.exit` or press `Ctrl + C` twice.
