# Practice Task - Node.js Architecture

## Task 1

In your own words explain:

- V8 Engine
- libuv
- Event Loop
- Call Stack

## Task 2

Draw the flow:

JavaScript Code
↓
Call Stack
↓
Node APIs / libuv
↓
Callback Queue
↓
Event Loop
↓
Call Stack

## Task 3

Predict the output:

```ts
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Explain why.

## Expected Understanding

After this topic, I should be able to explain:

- How Node.js executes JavaScript
- What V8 does
- What libuv does
- What the event loop does
- How async callbacks are executed
