import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

app.get("/products", (req, res) => {
  const { page, limit } = req.query;
  res.json({
    page,
    limit
  });
});

app.post("/users", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

