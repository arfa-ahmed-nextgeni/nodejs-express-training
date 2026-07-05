import express from "express";
import path from "path";
import fs from "fs";
import { promises as fsPromises } from "fs";

const dataFolderPath = path.join(process.cwd(), "35-streams-buffer", "data");
const sourceFilePath = path.join(dataFolderPath, "source.txt");
const copiedFilePath = path.join(dataFolderPath, "copied.txt");

const PORT = 3000;

const app = express();

app.get("/", (_req, res) => {
  res.json({
    "message": "Streams and Buffer topic"
  });
});

app.post("/create-source-file", async (_req, res) => {
  try {
    await fsPromises.mkdir(dataFolderPath, { recursive: true });
    await fsPromises.writeFile(sourceFilePath, "Hello from streams topic");
    res.json({
      "message": "Source file created"
    });
  } catch (error) {
    res.status(500).json({
      "error": "Failed to create source file",
      "details": error instanceof Error ? error.message : String(error)
    });
  }
});

app.post("/copy-file-stream", async (_req, res) => {
  try {
    await fsPromises.access(sourceFilePath);

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(copiedFilePath);

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
      res.json({
        message: "File copied using stream"
      });
    });

    readStream.on("error", () => {
      res.status(404).json({
        message: "Source file not found"
      });
    });

    writeStream.on("error", () => {
      res.status(500).json({
        message: "Failed to copy file"
      });
    });
  } catch {
    return res.status(404).json({
      message: "Source file not found"
    });
  }
});

app.get("/buffer-example", async (_req, res) => {
  try {
    const buffer = Buffer.from("Hello Buffer");
    res.json({
      "text": buffer.toString(),
      "bufferLength": buffer.length,
    });
  } catch (error) {
    res.status(500).json({
      "message": "Failed to create buffer"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});