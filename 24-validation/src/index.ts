import express from "express";
import * as z from "zod"; 

const PORT = 3000;

const app = express();

app.use(express.json());

const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

app.post("/users", (req, res) => {
  const result = createUserSchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({
      "message": "Invalid request body",
      "errors": result.error.issues
    });
  }

  // Here you would typically save the user data to a database
  res.status(201).json({
    "message": "User created",
    "user": result.data
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});