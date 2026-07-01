import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

const user = {
  id: 1,
  name: "Ahmed",
  role: "user"
};

function requireAdmin(_req: express.Request, res: express.Response, next: express.NextFunction) {
  if (user.role !== "admin") {
    return res.status(403).json({
      "message": "Forbidden"
    });
  }
  next();
}

app.get("/", (_req, res) => {
  res.json({
    "message": "Public route"
  });
});

app.get("/profile", (_req, res) => {
  res.json({
    "message": "Profile data",
    "user": user
  });
});

app.get("/admin", requireAdmin, (_req, res) => {
  res.json({
    "message": "Admin data"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});