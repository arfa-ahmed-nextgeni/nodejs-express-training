# Practice Task - Event Loop

## Task 1

Predict the output:

```ts
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Explain why.

## Task 2

Predict the output:

```ts
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);
```

Explain why.

## Task 3

In your own words explain:

- Call Stack
- Callback Queue
- Event Loop

## Expected Understanding

After this topic, I should be able to:

- Explain what the event loop does
- Explain why async callbacks run later
- Predict simple async execution order
