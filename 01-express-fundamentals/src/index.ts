import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "User1", email: "user1@example.com" },
  { id: 2, name: "User2", email: "user2@example.com" },
];

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Express fundamentals practice is running",
  });
});

app.get("/users", (req: Request, res: Response) => {
  const search = req.query.search as string | undefined;

  if (search) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    return res.status(200).json({
      data: filteredUsers,
    });
  }

  return res.status(200).json({
    data: users,
  });
});

app.get("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    data: user,
  });
});

app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body as Partial<User>;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  return res.status(201).json({
    message: "User created successfully",
    data: newUser,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});