import express from "express";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

app.get("/set-cookie", (_req, res) => {
  res.cookie("theme", "dark");
  res.json({
    "message": "Cookie set"
  });
});

app.get("/read-cookie", (req, res) => {
  const theme = req.cookies.theme;
  res.json({
    theme
  });
});

app.get("/clear-cookie", (_req, res) => {
  res.clearCookie("theme");
  res.json({
    "message": "Cookie cleared"
  });
});

app.get("/set-secure-cookie", (_req, res) => {
  res.cookie("refreshToken", "demo-refresh-token", {
    httpOnly: true,
    sameSite: "strict"
  });
  res.json({
    "message": "Secure cookie set"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});