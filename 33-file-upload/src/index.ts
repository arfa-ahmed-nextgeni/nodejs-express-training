import express from "express";
import multer from "multer";

const PORT = process.env.PORT || 3000;

const app = express();
const upload = multer({ dest: "33-file-upload/uploads/" });

app.get("/", (req, res) => {
  res.json({
    "message": "File upload topic"
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      "message": "File is required"
    });
  }

  res.json({
    "message": "File uploaded",
    "file": {
      "originalname": req.file.originalname,
      "mimetype": req.file.mimetype,
      "size": req.file.size
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});