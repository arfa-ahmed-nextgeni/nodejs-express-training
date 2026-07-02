import express from "express";
import jwt from "jsonwebtoken";

const app = express();

const PORT = 3000;
const ACCESS_TOKEN_SECRET = "demo-access-token-key";
const REFRESH_TOKEN_SECRET = "demo-refresh-token-key";

function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      "message": "Unauthorized"
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err) => {
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
  const payload = { id: 1, email: req.body.email, role: "user" };

  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

  res.json({
    "message": "Login successful",
    "accessToken": accessToken,
    "refreshToken": refreshToken
  });
});

app.post("/refresh-token", (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      "message": "Refresh token is required"
    });
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err: any) => {
    if (err) {
      return res.status(401).json({
        "message": "Invalid refresh token"
      });
    }

    const payload = { id: 1, email: req.body.email, role: "user" };

    const newAccessToken = jwt.sign({ id: payload.id, email: payload.email, role: payload.role }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

    res.json({
      "accessToken": newAccessToken
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});