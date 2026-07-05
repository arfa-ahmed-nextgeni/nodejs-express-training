# 36 - Chunks Concept on Large File

## Objective

Learn what chunks are and how Node.js reads large files in small parts using streams.

## Theory

A chunk is a small part of data.

When Node.js reads a large file using a stream, it does not read the full file at once. It reads the file in small parts. Each small part is called a chunk.

Example:

```txt
Large file -> chunk 1 -> chunk 2 -> chunk 3 -> done
```

## Why Chunks Are Useful

Chunks are useful because large files can use too much memory if we load them fully.

Using chunks means:

- Less memory usage
- Better performance for large files
- Data can be processed step by step
- Server does not need to wait for the full file before processing starts

## Chunks and Streams

Streams work with chunks.

When we use `fs.createReadStream()`, Node.js reads the file in chunks.

Example:

```ts
const readStream = fs.createReadStream(filePath, "utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});
```

The `data` event runs every time a new chunk is available.

## data Event

The `data` event gives us each chunk.

Example:

```ts
readStream.on("data", (chunk) => {
  console.log("New chunk received");
});
```

## end Event

The `end` event runs when the full file has been read.

Example:

```ts
readStream.on("end", () => {
  console.log("File reading completed");
});
```

## error Event

The `error` event runs if something goes wrong while reading the file.

Example:

```ts
readStream.on("error", () => {
  console.log("Failed to read file");
});
```

## highWaterMark

`highWaterMark` controls the approximate chunk size.

Example:

```ts
const readStream = fs.createReadStream(filePath, {
  encoding: "utf-8",
  highWaterMark: 10
});
```

This reads the file in small chunks of about 10 characters when using text encoding.

## Real Project Usage

Chunks are used in real projects when working with:

- Large text files
- CSV files
- Logs
- File processing
- Data import jobs

## Summary

A chunk is a small part of data. Streams read large files in chunks instead of loading the full file into memory. The `data` event receives chunks, the `end` event tells us reading is complete, and the `error` event handles problems.

## Practice Questions

### Q1. What is a chunk?

A chunk is a small part of data.

### Q2. Why does Node.js use chunks for large files?

To avoid loading the full file into memory at once.

### Q3. Which event gives us chunks from a readable stream?

The `data` event.

### Q4. Which event runs when file reading is complete?

The `end` event.

### Q5. What does `highWaterMark` control?

It controls the approximate chunk size used by the stream.
