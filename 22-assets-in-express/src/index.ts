import express from "express"

const PORT = 3000;

const app = express();

app.get("/", (_req, res) => {
  res.send("Welcome to Express Assets");
});

app.use(express.static("22-assets-in-express/public"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});