# 34 - File System, Path, and OS

## Objective

Learn how to use Node.js built-in modules for file system operations, path handling, and operating system information.

## Theory

Node.js includes many built-in modules. These modules are available without installing any package.

In this topic, we focus on:

```txt
fs
path
os
```

## fs Module

`fs` stands for File System.

It is used to work with files and folders.

Common use cases:

- Read files
- Write files
- Create files
- Delete files
- Check if a file exists

Example:

```ts
import fs from "fs";

fs.writeFileSync("message.txt", "Hello Node.js");
```

## path Module

`path` is used to safely work with file and folder paths.

Different operating systems use different path separators.

Example:

```txt
Windows -> folder\\file.txt
Linux/Mac -> folder/file.txt
```

Instead of writing paths manually, we can use `path.join()`.

Example:

```ts
import path from "path";

const filePath = path.join(process.cwd(), "data", "message.txt");
```

## os Module

`os` gives information about the operating system.

Example:

```ts
import os from "os";

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
```

## process.cwd()

`process.cwd()` returns the current working directory where the Node.js process is running.

Example:

```ts
const currentFolder = process.cwd();
```

## Async vs Sync fs Methods

The `fs` module provides both sync and async methods.

Example sync method:

```ts
fs.readFileSync("file.txt", "utf-8");
```

Example async promise method:

```ts
import { promises as fs } from "fs";

const content = await fs.readFile("file.txt", "utf-8");
```

For servers, async methods are usually better because they do not block the event loop.

## Real Project Usage

These modules are used in real projects for:

- Reading configuration files
- Writing logs
- Handling uploaded files
- Creating folders
- Reading templates
- Working with file paths safely
- Checking server OS details

## Summary

`fs` is used for file system operations. `path` is used to build safe file paths. `os` is used to read operating system information. These are built-in Node.js modules and do not need installation.

## Practice Questions

### Q1. What is the `fs` module used for?

The `fs` module is used to work with files and folders.

### Q2. What is the `path` module used for?

The `path` module is used to safely build and manage file paths.

### Q3. What is the `os` module used for?

The `os` module is used to get operating system information.

### Q4. Why is `path.join()` better than manually writing paths?

`path.join()` creates paths safely across different operating systems.

### Q5. Should server code prefer async file methods or sync file methods?

Server code should usually prefer async file methods because sync methods can block the event loop.
