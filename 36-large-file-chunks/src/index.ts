import express from "express";
import path from "path";
import fs from "fs";
import { promises as fsPromises } from "fs";

const PORT = 3000;

const app = express();
const dataFolderPath = path.join(process.cwd(), "36-large-file-chunks", "data");
const largeFilePath = path.join(dataFolderPath, "large-file.txt");

app.get("/", (req, res) => {
  res.json({
    "message": "Large file chunks topic"
  });
});

app.post("/create-large-file", async (req, res) => {
  try {
    await fsPromises.mkdir(dataFolderPath, { recursive: true });

    const content = Array.from({ length: 20 }, (_, index) => {
      return `Line ${index + 1}: Hello from large file chunks topic\n`;
    }).join("");

    await fsPromises.writeFile(largeFilePath, content);
    res.json({
      "message": "Large file created"
    });
  } catch (error) {
    res.status(500).json({
      "error": "Failed to create large file",
      "details": error instanceof Error ? error.message : String(error)
    });
  }
});

app.get("/read-chunks", (req, res) => {
  try {
    const readStream = fs.createReadStream(largeFilePath, {
      encoding: "utf-8",
      highWaterMark: 20
    });

    let chunkCount = 0;
    let totalLength = 0;

    readStream.on("data", (chunk) => {
      chunkCount++;
      totalLength += chunk.length;
    });

    readStream.on("end", () => {
      res.json({
        "message": "File read in chunks",
        chunkCount,
        totalLength
      });
    });

    readStream.on("error", (error) => {
      res.status(404).json({
        "message": "Large file not found"
      });
    });
  } catch (error) {
    res.status(500).json({
      "message": "Failed to read large file",
      "details": error instanceof Error ? error.message : String(error)
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});