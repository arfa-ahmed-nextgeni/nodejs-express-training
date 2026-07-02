# Practice Task - Cookies

## Task 1

Install cookie parser:

```bash
npm install cookie-parser
npm install -D @types/cookie-parser
```

## Task 2

Create:

```txt
31-cookies/src/index.ts
```

## Task 3

Import and use cookie parser:

```ts
import cookieParser from "cookie-parser";

app.use(cookieParser());
```

## Task 4

Create this route:

```txt
GET /set-cookie
```

It should set a cookie:

```ts
res.cookie("theme", "dark");
```

Return:

```json
{
  "message": "Cookie set"
}
```

## Task 5

Create this route:

```txt
GET /read-cookie
```

It should read the cookie from:

```ts
req.cookies.theme
```

Return:

```json
{
  "theme": "dark"
}
```

## Task 6

Create this route:

```txt
GET /clear-cookie
```

It should clear the cookie:

```ts
res.clearCookie("theme");
```

Return:

```json
{
  "message": "Cookie cleared"
}
```

## Task 7

Create this route:

```txt
GET /set-secure-cookie
```

It should set an httpOnly cookie:

```ts
res.cookie("refreshToken", "demo-refresh-token", {
  httpOnly: true,
  sameSite: "strict"
});
```

Return:

```json
{
  "message": "Secure cookie set"
}
```

Note: For local practice, do not use `secure: true` unless you are running HTTPS.

## Task 8

Add script in `package.json`:

```json
"dev:cookies": "tsx 31-cookies/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain cookies
- Set cookies using `res.cookie()`
- Read cookies using `cookie-parser`
- Clear cookies using `res.clearCookie()`
- Understand `httpOnly`, `secure`, and `sameSite`
