import express from "express";

const PORT = 3000;

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/text", (req, res) => {
  res.send("Hello Express");
});

app.get("/json", (req, res) => {
  res.json({
    framework: "Express",
    language: "TypeScript"
  });
});

app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User created"
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});