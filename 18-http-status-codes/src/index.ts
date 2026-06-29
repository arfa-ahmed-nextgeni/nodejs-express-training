import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/success", (_req, res) => {
  res.status(200).send("Success");
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Bad Request: Name and email are required");
  }
  res.status(201).send(`User ${name} created successfully`);
});

app.delete("/users/:id", (_req, res) => {
  res.status(204);
});

app.get("/error", (_req, res) => {
  res.status(500).send("Internal Server Error");
});

app.get("/unauthorized", (_req, res) => {
  res.status(401).send("Unauthorized");
});

app.get("/forbidden", (_req, res) => {
  res.status(403).send("Forbidden");
});

app.get("/not-found", (_req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});