# 04 - Event Loop

The event loop is the mechanism that allows Node.js to handle asynchronous callbacks without blocking the main JavaScript thread.

JavaScript code runs on the call stack. When an asynchronous operation is completed, its callback waits in a queue. The event loop checks when the call stack is empty and then moves the callback back to the call stack for execution.

## Simple Definition

The event loop checks the call stack and callback queue. When the call stack is empty, it moves ready callbacks from the queue to the call stack.

## Key Points

- JavaScript runs synchronous code first.
- Async callbacks do not run immediately.
- Completed async callbacks wait in a queue.
- The event loop only moves callbacks when the call stack is empty.
- This is why Node.js can handle async work without blocking the main thread.

## Example

```ts
console.log("One");

setTimeout(() => {
  console.log("Two");
}, 0);

console.log("Three");
```

Output:

```txt
One
Three
Two
```

Even with `0` delay, `setTimeout` runs after synchronous code because its callback waits for the call stack to become empty.

## Summary

The event loop is an important part of Node.js. It helps Node.js execute asynchronous callbacks after the synchronous code is finished and the call stack is free.

## Practice Questions

### Q1. What is the event loop?

The event loop is a mechanism that checks whether the call stack is empty and then moves ready callbacks from the queue to the call stack.

### Q2. Does `setTimeout(..., 0)` run immediately?

No. It runs after the current synchronous code finishes and the call stack becomes empty.

### Q3. Why is the event loop important in Node.js?

It allows Node.js to handle asynchronous operations efficiently without blocking the main JavaScript thread.
