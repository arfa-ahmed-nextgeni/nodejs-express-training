import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Express Training App";
const NODE_ENV = process.env.NODE_ENV || "development";

const app = express();

app.get("/", (_req, res) => {
  res.json({
    "message": "Environment variables topic",
    "appName": APP_NAME,
    "environment": NODE_ENV
  });
});

app.get("/config", (_req, res) => {
  res.json({
    "port": PORT,
    "appName": APP_NAME,
    "environment": NODE_ENV
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});