import express from "express"

const PORT = 3000;

const app = express();

const isLoggedIn = false;

function logger(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (!isLoggedIn) {
    return res.status(401).send("Unauthorized");
  }

  next();
}

app.use(express.json());

app.get("/", logger, (_req, res) => {
  res.send("Welcome")
})

app.get("/products", logger, (_req, res) => {
  res.json({ products: []});
})

app.post("/products", logger, (_req, res) => {
  res.status(201).send("Product added");
})

app.get("/customers", logger, (_req, res) => {
  res.json({ users: []});
})

app.post("/login", logger, (_req, res) => {
  res.send("Login successfully")
})

app.post("/admin", logger, auth, (_req, res) => {
  res.send("Admin Dashboard");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});