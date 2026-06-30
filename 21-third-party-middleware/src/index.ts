import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello from Express");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});