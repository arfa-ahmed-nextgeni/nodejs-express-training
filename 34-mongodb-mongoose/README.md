# 34 - MongoDB with Mongoose

## Objective

Learn how MongoDB and Mongoose are used in a Node.js and Express.js application.

## Theory

MongoDB is a NoSQL database.

It stores data in document format, similar to JSON.

Example user document:

```json
{
  "name": "Test User",
  "email": "user@example.com"
}
```

## What is Mongoose?

Mongoose is an ODM library for MongoDB.

ODM means Object Data Modeling.

Mongoose helps us:

- Connect to MongoDB
- Create schemas
- Create models
- Validate data shape
- Save documents
- Query documents

## MongoDB Collection

A collection is like a group of documents.

Example:

```txt
users collection
```

It can contain many user documents.

## Mongoose Schema

A schema defines the shape of a document.

Example:

```ts
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
```

This means each user document can have `name` and `email` fields.

## Mongoose Model

A model is used to interact with a MongoDB collection.

Example:

```ts
const User = mongoose.model("User", userSchema);
```

Now we can use:

```ts
User.create()
User.find()
User.findById()
User.findByIdAndUpdate()
User.findByIdAndDelete()
```

## Connecting to MongoDB

Example:

```ts
await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/express-training");
```

In real projects, the MongoDB URL should come from environment variables.

## Real Project Usage

MongoDB and Mongoose are commonly used for:

- User accounts
- Products
- Orders
- Categories
- Admin data
- Logs
- App settings

## Important Note

Do not commit real database credentials to GitHub.

Use demo/local connection strings for practice.

## Summary

MongoDB stores data as documents. Mongoose helps Node.js applications connect to MongoDB and work with schemas and models. A schema defines document shape, and a model is used to create, read, update, and delete documents.

## Practice Questions

### Q1. What type of database is MongoDB?

MongoDB is a NoSQL database.

### Q2. What does Mongoose help us do?

Mongoose helps us connect to MongoDB, create schemas, create models, and query data.

### Q3. What is a schema?

A schema defines the shape of a document.

### Q4. What is a model?

A model is used to interact with a MongoDB collection.

### Q5. Should real database credentials be committed to GitHub?

No. Real database credentials should never be committed to GitHub.
