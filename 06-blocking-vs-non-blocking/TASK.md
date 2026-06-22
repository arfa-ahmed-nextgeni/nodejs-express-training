# Practice Task - Blocking vs Non-Blocking

## Task 1

Explain in your own words:

- Blocking
- Non-blocking

## Task 2

Predict the output:

```ts
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Explain why.

## Task 3

Answer:

Which is blocking?

- `fs.readFileSync()`
- `fs.readFile()`

Why?

## Task 4

What happens if a server receives many requests while executing a long blocking operation?

## Expected Understanding

After this topic, I should be able to:

- Explain blocking vs non-blocking
- Identify synchronous and asynchronous behavior
- Understand why non-blocking code is important in Node.js APIs
