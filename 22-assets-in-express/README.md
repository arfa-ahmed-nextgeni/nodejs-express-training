# 22 - Assets in Express

## Objective

Learn how to serve static files such as HTML, CSS, JavaScript, images, PDFs, and text files using Express.js.

## Theory

By default, Express only responds to routes that we define manually.

For example:

```txt
GET /products
GET /users
```

But sometimes we need to expose static files like:

```txt
index.html
style.css
logo.png
favicon.ico
robots.txt
```

These files are called static assets.

Express provides built-in middleware for serving static assets:

```ts
app.use(express.static("public"));
```

This makes files inside the `public` folder accessible directly from the browser.

## Example

Folder structure:

```txt
public/
├── index.html
├── style.css
└── logo.txt
```

Express setup:

```ts
import express from "express";

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

Then these URLs become available:

```txt
http://localhost:3000/index.html
http://localhost:3000/style.css
http://localhost:3000/logo.txt
```

## Important Point

We do not need to create a route for every static file.

Express automatically serves files from the folder passed to `express.static()`.

## Real Project Usage

Static assets commonly include:

- Images
- CSS files
- JavaScript files
- PDF files
- Favicons
- Robots.txt
- Sitemap files

In production, static files are often served by Nginx, Apache, object storage, or a CDN. But Express can serve static files directly for smaller applications or development practice.

## Summary

Static assets are files served directly to the client. Express uses `express.static()` middleware to expose files from a folder like `public`. Once configured, files can be accessed directly by URL without creating separate routes for each file.

## Practice Questions

### Q1. What are static assets?

Static assets are files like HTML, CSS, JavaScript, images, PDFs, and text files that are served directly to the client.

### Q2. Which Express middleware serves static files?

`express.static()` serves static files.

### Q3. If `public/logo.png` exists and we use `app.use(express.static("public"))`, what URL opens it?

`http://localhost:3000/logo.png` opens it.

### Q4. Do we need to create a route for every static file?

No. Express serves files automatically from the static folder.
