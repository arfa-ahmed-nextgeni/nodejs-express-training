import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (_req, res) => {
  res.send("Express setup is working");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});