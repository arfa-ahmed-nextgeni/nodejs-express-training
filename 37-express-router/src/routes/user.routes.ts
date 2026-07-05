import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    "message": "Get all users"
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    "message": "Get single user",
    "userId": id
  });
});

export default router;