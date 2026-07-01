import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const sanitizedUser = {
    name: name.trim(),
    email: email.trim().toLowerCase()
  };

  res.json({ user: sanitizedUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});