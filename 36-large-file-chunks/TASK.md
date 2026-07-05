# Practice Task - Chunks Concept on Large File

## Task 1

Create:

```txt
36-large-file-chunks/src/index.ts
```

No package installation is needed because `fs` and `path` are built into Node.js.

## Task 2

Import required modules:

```ts
import express from "express";
import path from "path";
import fs from "fs";
import { promises as fsPromises } from "fs";
```

## Task 3

Create file paths:

```ts
const dataFolderPath = path.join(process.cwd(), "36-large-file-chunks", "data");
const largeFilePath = path.join(dataFolderPath, "large-file.txt");
```

## Task 4

Create this route:

```txt
GET /
```

Return:

```json
{
  "message": "Large file chunks topic"
}
```

## Task 5

Create this route:

```txt
POST /create-large-file
```

It should:

1. Create the data folder if missing
2. Write repeated text into `large-file.txt`

Example:

```ts
await fsPromises.mkdir(dataFolderPath, { recursive: true });

const content = Array.from({ length: 20 }, (_, index) => {
  return `Line ${index + 1}: Hello from large file chunks topic\n`;
}).join("");

await fsPromises.writeFile(largeFilePath, content);
```

Return:

```json
{
  "message": "Large file created"
}
```

## Task 6

Create this route:

```txt
GET /read-chunks
```

It should read `large-file.txt` using `fs.createReadStream()`.

Use small chunk size:

```ts
const readStream = fs.createReadStream(largeFilePath, {
  encoding: "utf-8",
  highWaterMark: 20
});
```

Count how many chunks are received.

Example variables:

```ts
let chunkCount = 0;
let totalLength = 0;
```

On `data` event:

```ts
readStream.on("data", (chunk) => {
  chunkCount++;
  totalLength += chunk.length;
});
```

On `end` event, return:

```json
{
  "message": "File read in chunks",
  "chunkCount": 10,
  "totalLength": 200
}
```

If the file is missing, return status `404`:

```json
{
  "message": "Large file not found"
}
```

## Task 7

Add script in `package.json`:

```json
"dev:chunks": "tsx 36-large-file-chunks/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain chunks
- Explain why chunks are useful
- Use the `data` event
- Use the `end` event
- Use the `error` event
- Understand `highWaterMark`
- Read a file in small parts using streams
