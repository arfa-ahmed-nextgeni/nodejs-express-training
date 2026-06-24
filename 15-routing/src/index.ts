import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.send("List of users.");
});

app.post("/users", (req, res) => {
  res.send("User created.");
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId} deleted.`);
});

app.get("/products", (req, res) => {
  res.send("List of products.");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});