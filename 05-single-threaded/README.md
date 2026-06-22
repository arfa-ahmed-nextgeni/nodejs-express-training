# 05 - Single Threaded

Node.js is single-threaded for JavaScript execution. This means JavaScript code runs on one main thread, one operation at a time.

However, Node.js can still handle many asynchronous operations efficiently because tasks like file system work, network requests, timers, and other I/O work are handled outside the main JavaScript thread by Node APIs and libuv.

## Simple Definition

Single-threaded means Node.js runs JavaScript code on one main thread.

## Key Points

- JavaScript execution in Node.js happens on one main thread.
- Synchronous code blocks the main thread.
- Asynchronous I/O work can be handled outside the main thread.
- The event loop helps completed async callbacks run when the call stack is free.
- Node.js is good for I/O-heavy work like APIs, file operations, and network requests.
- Node.js is not ideal for heavy CPU work on the main thread because it can block other requests.

## Common Confusion

### If Node.js is single-threaded, how can it handle many requests?

Node.js handles many requests because it does not wait for slow I/O operations on the main thread. It sends async work to Node APIs/libuv and continues handling other work. When async work is completed, the callback is executed later through the event loop.

## Example

```ts
console.log("Request started");

setTimeout(() => {
  console.log("Async work completed");
}, 1000);

console.log("Node.js can continue other work");
```

Output:

```txt
Request started
Node.js can continue other work
Async work completed
```

## Summary

Node.js is single-threaded for JavaScript execution, but it can handle many asynchronous operations using Node APIs, libuv, and the event loop. Synchronous CPU-heavy code can block the main thread, so it should be avoided in request handlers.

## Practice Questions

### Q1. What does single-threaded mean in Node.js?

It means JavaScript code runs on one main thread.

### Q2. If Node.js is single-threaded, how can it handle many requests?

Because slow asynchronous I/O work is handled outside the main JavaScript thread, and the event loop executes callbacks when the call stack is free.

### Q3. What type of work can block Node.js?

Long-running synchronous or CPU-heavy work can block the main thread.
