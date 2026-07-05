# 33 - File Upload

## Objective

Learn how to upload files in an Express.js API using `multer`.

## Theory

File upload means sending a file from the client to the server.

Examples:

- Profile image upload
- Product image upload
- PDF upload
- CSV upload
- Invoice upload

In Express, file uploads are commonly handled using the `multer` package.

## Why Express Needs multer

Express can read JSON request bodies using:

```ts
app.use(express.json());
```

But file uploads are usually sent as:

```txt
multipart/form-data
```

Express does not handle `multipart/form-data` by default.

That is why we use `multer`.

## Install multer

```bash
npm install multer
npm install -D @types/multer
```

## Basic Upload Setup

```ts
import multer from "multer";

const upload = multer({ dest: "uploads/" });
```

This means uploaded files will be stored in the `uploads` folder.

## Single File Upload

```ts
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded",
    file: req.file
  });
});
```

Here:

```txt
file
```

is the form field name.

In Postman or frontend form, the file field name must also be `file`.

## req.file

For single file upload, multer adds file information to:

```ts
req.file
```

It contains details like:

- original file name
- generated file name
- file size
- MIME type
- upload path

## Important Security Notes

In production, we should not allow every file type.

We usually validate:

- File type
- File size
- File extension
- Upload destination

For this practice topic, we focus only on the basic upload flow.

## Real Project Usage

File upload is used in real APIs for:

- User profile images
- Product images
- Documents
- Admin uploads
- Importing CSV files

In production, files are often uploaded to cloud storage like S3 instead of storing directly on the server disk.

## Summary

Express does not handle file uploads by default. We use `multer` to handle `multipart/form-data`. For single file upload, we use `upload.single("file")`, and file details are available in `req.file`.

## Practice Questions

### Q1. Which package is commonly used for file uploads in Express?

`multer`.

### Q2. What content type is commonly used for file uploads?

`multipart/form-data`.

### Q3. Which multer method handles one file upload?

`upload.single()`.

### Q4. Where does multer store single uploaded file information?

In `req.file`.

### Q5. Should production APIs validate file type and size?

Yes. Production APIs should validate file type and size.
