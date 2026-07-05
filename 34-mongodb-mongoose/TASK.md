# Practice Task - MongoDB with Mongoose

## Task 1

Install mongoose:

```bash
npm install mongoose
```

## Task 2

Create:

```txt
34-mongodb-mongoose/src/index.ts
```

## Task 3

Import mongoose:

```ts
import mongoose from "mongoose";
```

## Task 4

Create a MongoDB connection string:

```ts
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/express-training";
```

For local practice, you need MongoDB running locally.

## Task 5

Connect to MongoDB:

```ts
async function connectDB() {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB connected");
}
```

Call `connectDB()` before starting the server.

## Task 6

Create a user schema:

```ts
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});
```

## Task 7

Create a user model:

```ts
const User = mongoose.model("User", userSchema);
```

## Task 8

Create this route:

```txt
GET /
```

Return:

```json
{
  "message": "MongoDB Mongoose topic"
}
```

## Task 9

Create this route:

```txt
POST /users
```

It should read `name` and `email` from `req.body`.

If either is missing, return status `400`:

```json
{
  "message": "Name and email are required"
}
```

If both exist, create a user:

```ts
const user = await User.create({ name, email });
```

Return status `201`:

```json
{
  "message": "User created",
  "user": {}
}
```

## Task 10

Create this route:

```txt
GET /users
```

It should return all users:

```ts
const users = await User.find();
```

Response:

```json
{
  "users": []
}
```

## Task 11

Add script in `package.json`:

```json
"dev:mongodb": "tsx 34-mongodb-mongoose/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain MongoDB
- Explain Mongoose
- Create a schema
- Create a model
- Connect Express with MongoDB
- Create and read documents using Mongoose
