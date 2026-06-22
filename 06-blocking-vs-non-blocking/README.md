# 06 - Blocking vs Non-Blocking

Blocking and non-blocking describe how code behaves while waiting for slow operations like file reading, database calls, or network requests.

Blocking code waits until the operation finishes before moving to the next line. Non-blocking code starts the operation and allows the program to continue running other code while waiting.

## Simple Definition

- **Blocking**: Code waits and stops further execution until the task finishes.
- **Non-blocking**: Code does not wait and can continue running other work while the task is in progress.

## Key Points

- Blocking code can make a Node.js server slow.
- Non-blocking code is better for APIs and server request handling.
- Synchronous functions are usually blocking.
- Asynchronous functions are usually non-blocking.
- In Node.js, we should avoid long blocking work in request handlers.

## Example

### Blocking Example

```ts
import fs from "node:fs";

console.log("Start");

const data = fs.readFileSync("sample.txt", "utf-8");
console.log(data);

console.log("End");
```

In this example, Node.js waits for `readFileSync` to finish before moving to the next line.

### Non-Blocking Example

```ts
import fs from "node:fs";

console.log("Start");

fs.readFile("sample.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});

console.log("End");
```

In this example, Node.js does not wait for `readFile`. It continues and prints `End`, then later prints file data when reading is completed.

## Summary

Blocking code stops the main JavaScript thread until the task finishes. Non-blocking code allows Node.js to continue other work and run the callback later when the async task is completed. For APIs and servers, non-blocking code is usually better.

## Practice Questions

### Q1. What is blocking code?

Blocking code waits for the current task to complete before moving to the next task.

### Q2. What is non-blocking code?

Non-blocking code does not wait for the current task to complete. It starts the task and continues executing the next code.

### Q3. Which one is blocking: `fs.readFileSync()` or `fs.readFile()`?

`fs.readFileSync()` is blocking because it waits until the file reading task is completed.

`fs.readFile()` is non-blocking because it accepts a callback and continues execution. When the file reading is completed, the callback is called.

### Q4. What happens if a server runs blocking CPU work for 30 seconds?

Other incoming requests can be blocked or delayed for those 30 seconds because the main JavaScript thread is busy.

### Q5. Why should we avoid blocking code in API handlers?

Because blocking code keeps the main JavaScript thread busy, so other incoming requests may be delayed, blocked, or timed out.
