import express from "express";
import path from "path";
import os from "os";
import { promises as fs } from "fs";

const PORT = 3000;

const dataFolderPath = path.join(process.cwd(), "34-file-system-path-os", "data");
const filePath = path.join(dataFolderPath, "message.txt");

const app = express();

app.get("/", async (_req, res) => {
  res.json({
    "message": "File System, Path, and OS topic"
  });
});

app.post("/write-file", async (_req, res) => {
  try {
    await fs.mkdir(dataFolderPath, { recursive: true });
    await fs.writeFile(filePath, "Hello from Node.js file system");
    res.json({
      "message": "File written"
    });
  } catch (error) {
    res.status(500).json({
      "error": "Failed to write file",
      "details": error instanceof Error ? error.message : String(error)
    });
  }
});

app.get("/read-file", async (_req, res) => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    res.json({
      content
    });
  } catch (error) {
    res.status(404).json({
      "message": "File not found"
    });
  }
});

app.get("/os-info", (_req, res) => {
  const osInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    cpuCount: os.cpus().length,
    homeDirectory: os.homedir(),
  };
  res.json(osInfo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});