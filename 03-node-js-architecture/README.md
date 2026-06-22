# 03 - Node.js Architecture

Node.js architecture explains how Node.js runs JavaScript code and handles asynchronous operations.

Node.js uses the V8 engine to execute JavaScript. It also uses libuv to handle asynchronous tasks like file system work, timers, networking, and other I/O operations.

## Simple Definition

Node.js architecture is the internal design of Node.js that allows JavaScript to run on the server and handle asynchronous tasks efficiently.

## Key Parts

- **V8 Engine**: Executes JavaScript code.
- **Call Stack**: Runs synchronous JavaScript code line by line.
- **Node APIs**: Provide features like file system, HTTP, timers, and OS access.
- **libuv**: Handles asynchronous operations and manages the event loop.
- **Event Loop**: Moves completed async callbacks back to JavaScript when the call stack is free.
- **Callback Queue**: Stores callbacks that are ready to run.

## How It Works

1. JavaScript code starts running on the call stack.
2. Synchronous code executes immediately.
3. Asynchronous work is sent to Node APIs/libuv.
4. When async work is completed, its callback goes to a queue.
5. The event loop checks if the call stack is empty.
6. If the call stack is empty, the callback is moved to the call stack and executed.

## Example

```ts
console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 0);

console.log("End");
```

Output:

```txt
Start
End
Timer finished
```

`setTimeout` is asynchronous, so its callback runs after the synchronous code finishes.

## Summary

Node.js uses V8 to execute JavaScript and libuv to handle asynchronous operations. The event loop allows Node.js to perform non-blocking tasks by running callbacks only when the call stack is empty.

## Practice Questions

### Q1. What is the role of V8 in Node.js?

V8 executes JavaScript code in Node.js.

### Q2. What is the role of libuv in Node.js?

libuv helps Node.js handle asynchronous operations like timers, file system work, networking, and the event loop.

### Q3. Why does `setTimeout(..., 0)` run after synchronous code?

Because its callback waits in the queue and only runs when the call stack becomes empty.
