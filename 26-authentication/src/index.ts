import express from "express";

const PORT = 3000;

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

  if (token !== "your-secret-token") {
    return res.status(403).json({ message: "Invalid token" });
  }

  next();
}

app.get("/", (_req, res) => {
  res.json({
    "message": "Public route"
  });
});

app.get("/profile", auth, (_req, res) => {
  res.json({
    "message": "Profile data"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});