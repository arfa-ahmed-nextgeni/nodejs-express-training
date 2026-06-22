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

### Q1. What is the difference between Call Stack, Callback Queue, and Event Loop?

- **Call Stack**: Stores and runs JavaScript code line by line synchronously.
- **Callback Queue**: Stores completed async callbacks that are ready to run.
- **Event Loop**: Checks if the call stack is empty and moves ready callbacks from the callback queue to the call stack.

### Q2. What is the output of this code?

```ts
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);
```

Output:

```txt
1
3
2
```

First, `1` is printed. Then `setTimeout` is registered as an async timer. JavaScript continues and prints `3`. After around 1 second, the timer callback is ready. When the call stack is empty, the event loop moves the callback to the call stack and `2` is printed.

### Q3. Why does `setTimeout(..., 0)` not execute immediately?

Because `setTimeout` is asynchronous. Its callback must wait in the callback queue and can only run when the call stack becomes empty.

### Q4. Why is the event loop important in Node.js?

It allows Node.js to handle asynchronous operations efficiently without blocking the main JavaScript thread.
