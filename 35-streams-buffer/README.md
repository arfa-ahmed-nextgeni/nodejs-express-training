# 35 - Streams and Buffer

## Objective

Learn how Node.js streams and buffers are used to read and write data efficiently.

## Theory

A stream is a way to handle data piece by piece instead of loading everything into memory at once.

This is useful when working with large files.

Example:

```txt
Normal readFile -> loads full file into memory
Stream          -> reads file in small parts
```

## Why Streams Are Useful

If a file is very large, reading the whole file at once can use too much memory.

Streams help by processing data gradually.

Common stream use cases:

- Reading large files
- Writing large files
- Processing log files
- Working with file input and output

## Types of Streams

Common stream types:

```txt
Readable Stream  -> read data
Writable Stream  -> write data
Duplex Stream    -> read and write data
Transform Stream -> modify data while reading/writing
```

For this topic, we focus on readable and writable streams.

## Readable Stream

A readable stream is used to read data.

Example:

```ts
const readStream = fs.createReadStream(filePath, "utf-8");
```

## Writable Stream

A writable stream is used to write data.

Example:

```ts
const writeStream = fs.createWriteStream(filePath);
```

## Pipe

`pipe()` connects a readable stream to a writable stream.

Example:

```ts
readStream.pipe(writeStream);
```

This can read from one file and write to another file.

## Buffer

A buffer is a temporary memory area used to store binary data.

Node.js uses buffers when working with files and streams.

Example:

```ts
const buffer = Buffer.from("Hello Node.js");

console.log(buffer);
console.log(buffer.toString());
```

## Real Project Usage

Streams and buffers are used in real projects for:

- Reading large files
- Writing large files
- Processing CSV files
- Processing logs
- Working with uploaded files

## Summary

Streams process data piece by piece, which is better for large files. Buffers store binary data temporarily. Node.js uses streams and buffers when working with files.

## Practice Questions

### Q1. What is a stream?

A stream is a way to process data piece by piece instead of loading everything at once.

### Q2. Why are streams useful for large files?

Streams use less memory because they do not load the full file at once.

### Q3. What is a readable stream?

A readable stream is used to read data.

### Q4. What is a writable stream?

A writable stream is used to write data.

### Q5. What is a buffer?

A buffer is a temporary memory area used to store binary data.
