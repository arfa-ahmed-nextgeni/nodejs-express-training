import express from "express";

const PORT = 3000;

const app = express();

app.use((_req, _res, next) => {
  console.log("Application middleware");
  next();
});

function auth(_req: express.Request, _res: express.Response, next: express.NextFunction) {
  console.log("Auth middleware");
  next();
}

app.get("/", (_req, res) => {
  res.send("Home Page");
});

app.get("/admin", auth, (_req, res) => {
  res.send("Admin Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});