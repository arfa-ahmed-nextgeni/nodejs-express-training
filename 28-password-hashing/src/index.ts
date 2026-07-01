import express from "express";
import bcrypt from "bcrypt";

const PORT = 3000;

const app = express();

app.use(express.json());

let storedHashedPassword: string = "";

app.post("/register", async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      "message": "Password is required"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  storedHashedPassword = hashedPassword;

  res.json({
    "message": "User registered",
    "hashedPassword": hashedPassword
  });
});

app.post("/login", async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      "message": "Password is required"
    });
  }

  const isMatch = await bcrypt.compare(password, storedHashedPassword);

  if (isMatch) {
    res.json({
      "message": "Login successful"
    });
  } else {
    res.status(401).json({
      "message": "Invalid credentials"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});