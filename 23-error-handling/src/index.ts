import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: "Email is required" });
  }
  res.status(201).json({ message: "User created" });
});

app.get("/try-catch-error", (req, res) => {
  try {
    throw new Error("This is a test error");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/central-error", (_req, _res, next) => {
  try {
    throw new Error("This is a test error");
  } catch (error) {
    next(error);
  }
});

// Centralized error handling middleware
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});