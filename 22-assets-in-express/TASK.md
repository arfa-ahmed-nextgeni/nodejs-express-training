# Practice Task - Assets in Express

## Task 1

Create this folder structure:

```txt
22-assets-in-express/
├── public/
│   ├── index.html
│   ├── style.css
│   └── logo.txt
└── src/
    └── index.ts
```

## Task 2

Create:

```txt
22-assets-in-express/public/index.html
```

Example content:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Express Assets</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <h1>Hello Express Assets</h1>
  <p>This HTML file is served as a static asset.</p>
</body>
</html>
```

## Task 3

Create:

```txt
22-assets-in-express/public/style.css
```

Example content:

```css
body {
  font-family: Arial, sans-serif;
}
```

## Task 4

Create:

```txt
22-assets-in-express/public/logo.txt
```

Example content:

```txt
Express Training Repository
```

## Task 5

Create:

```txt
22-assets-in-express/src/index.ts
```

Use Express static middleware:

```ts
app.use(express.static("22-assets-in-express/public"));
```

## Task 6

Create a simple route:

```txt
GET /
```

Return:

```txt
Welcome to Express Assets
```

## Task 7

Add script in `package.json`:

```json
"dev:assets": "tsx 22-assets-in-express/src/index.ts"
```

## Task 8

Run:

```bash
npm run dev:assets
```

Test these URLs:

```txt
http://localhost:3000/
http://localhost:3000/index.html
http://localhost:3000/style.css
http://localhost:3000/logo.txt
```

## Expected Understanding

After this topic, I should be able to:

- Explain static assets
- Use `express.static()`
- Serve files from a public folder
- Understand why routes are not needed for every static file
