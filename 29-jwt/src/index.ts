import express from "express";
import jwt from "jsonwebtoken";

const PORT = 3000;
const JWT_SECRET = "demo-jwt-signing-key";

const app = express();

app.use(express.json());

function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      "message": "Unauthorized"
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({
        "message": "Invalid token"
      });
    }

    next();
  });
}

app.get("/profile", auth, (_req, res) => {
  res.json({
    "message": "Profile data"
  });
});

app.post("/login", (req, res) => {
  const token = jwt.sign(
    { id: 1, email: req.body.email, role: "user" },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    "message": "Login successful",
    "token": "generated-token"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});