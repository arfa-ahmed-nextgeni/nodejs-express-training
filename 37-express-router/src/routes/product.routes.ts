import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    "message": "Get all products"
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    "message": "Get single product",
    "productId": id
  });
});

export default router;