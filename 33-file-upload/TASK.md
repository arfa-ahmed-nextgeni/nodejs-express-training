# Practice Task - File Upload

## Task 1

Install multer:

```bash
npm install multer
npm install -D @types/multer
```

## Task 2

Create:

```txt
33-file-upload/src/index.ts
```

## Task 3

Import multer:

```ts
import multer from "multer";
```

## Task 4

Create upload middleware:

```ts
const upload = multer({ dest: "33-file-upload/uploads/" });
```

## Task 5

Create this route:

```txt
GET /
```

Return:

```json
{
  "message": "File upload topic"
}
```

## Task 6

Create this upload route:

```txt
POST /upload
```

Use:

```ts
upload.single("file")
```

Example:

```ts
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded",
    file: req.file
  });
});
```

## Task 7

If file is missing, return status `400`:

```json
{
  "message": "File is required"
}
```

## Task 8

If file exists, return:

```json
{
  "message": "File uploaded",
  "file": {
    "originalname": "example.png",
    "mimetype": "image/png",
    "size": 12345
  }
}
```

You can return only useful fields instead of the full `req.file` object.

## Task 9

Add script in `package.json`:

```json
"dev:file-upload": "tsx 33-file-upload/src/index.ts"
```

## Task 10

Test in Postman:

```txt
POST http://localhost:3000/upload
```

Body type:

```txt
form-data
```

Key:

```txt
file
```

Value:

```txt
Choose any local file
```

## Expected Understanding

After this topic, I should be able to:

- Explain file upload
- Understand `multipart/form-data`
- Use `multer`
- Upload one file using `upload.single("file")`
- Read uploaded file information from `req.file`
