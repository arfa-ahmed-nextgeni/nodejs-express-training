# Practice Task - Streams and Buffer

## Task 1

Create:

```txt
35-streams-buffer/src/index.ts
```

No package installation is needed because `fs`, `path`, and `Buffer` are built into Node.js.

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
const dataFolderPath = path.join(process.cwd(), "35-streams-buffer", "data");
const sourceFilePath = path.join(dataFolderPath, "source.txt");
const copiedFilePath = path.join(dataFolderPath, "copied.txt");
```

## Task 4

Create this route:

```txt
GET /
```

Return:

```json
{
  "message": "Streams and Buffer topic"
}
```

## Task 5

Create this route:

```txt
POST /create-source-file
```

It should:

1. Create the data folder if missing
2. Write sample text into `source.txt`

Use:

```ts
await fsPromises.mkdir(dataFolderPath, { recursive: true });
await fsPromises.writeFile(sourceFilePath, "Hello from streams topic");
```

Return:

```json
{
  "message": "Source file created"
}
```

## Task 6

Create this route:

```txt
POST /copy-file-stream
```

It should copy `source.txt` to `copied.txt` using streams:

```ts
const readStream = fs.createReadStream(sourceFilePath);
const writeStream = fs.createWriteStream(copiedFilePath);

readStream.pipe(writeStream);
```

When writing is finished, return:

```json
{
  "message": "File copied using stream"
}
```

If source file is missing, return status `404`:

```json
{
  "message": "Source file not found"
}
```

## Task 7

Create this route:

```txt
GET /buffer-example
```

Create a buffer:

```ts
const buffer = Buffer.from("Hello Buffer");
```

Return:

```json
{
  "text": "Hello Buffer",
  "bufferLength": 12
}
```

Use:

```ts
buffer.toString()
buffer.length
```

## Task 8

Add script in `package.json`:

```json
"dev:streams": "tsx 35-streams-buffer/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain streams
- Explain buffers
- Create readable streams
- Create writable streams
- Use `pipe()`
- Understand why streams are useful for large files
