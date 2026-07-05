# Practice Task - File System, Path, and OS

## Task 1

Create:

```txt
34-file-system-path-os/src/index.ts
```

No package installation is needed because `fs`, `path`, and `os` are built-in Node.js modules.

## Task 2

Import required modules:

```ts
import express from "express";
import path from "path";
import os from "os";
import { promises as fs } from "fs";
```

## Task 3

Create a data folder path:

```ts
const dataFolderPath = path.join(process.cwd(), "34-file-system-path-os", "data");
const filePath = path.join(dataFolderPath, "message.txt");
```

## Task 4

Create this route:

```txt
GET /
```

Return:

```json
{
  "message": "File System, Path, and OS topic"
}
```

## Task 5

Create this route:

```txt
POST /write-file
```

It should:

1. Create the data folder if it does not exist
2. Write this text into `message.txt`:

```txt
Hello from Node.js file system
```

Use:

```ts
await fs.mkdir(dataFolderPath, { recursive: true });
await fs.writeFile(filePath, "Hello from Node.js file system");
```

Return:

```json
{
  "message": "File written"
}
```

## Task 6

Create this route:

```txt
GET /read-file
```

It should read `message.txt`:

```ts
const content = await fs.readFile(filePath, "utf-8");
```

Return:

```json
{
  "content": "Hello from Node.js file system"
}
```

If the file does not exist, return status `404`:

```json
{
  "message": "File not found"
}
```

## Task 7

Create this route:

```txt
GET /os-info
```

Return:

```json
{
  "platform": "darwin",
  "architecture": "arm64",
  "cpuCount": 8,
  "homeDirectory": "/Users/example"
}
```

Use:

```ts
os.platform()
os.arch()
os.cpus().length
os.homedir()
```

## Task 8

Add script in `package.json`:

```json
"dev:fs": "tsx 34-file-system-path-os/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain `fs`
- Explain `path`
- Explain `os`
- Create folders using Node.js
- Write files using Node.js
- Read files using Node.js
- Build safe file paths using `path.join()`
