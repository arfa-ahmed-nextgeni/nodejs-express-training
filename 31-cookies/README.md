# 31 - Cookies

## Objective

Learn what cookies are and how to set, read, and clear cookies in an Express.js API.

## Theory

A cookie is a small piece of data stored in the browser.

The server can send a cookie to the browser using the `Set-Cookie` response header.

After that, the browser can automatically send the cookie back to the server on future requests.

Cookies are commonly used for:

- Login sessions
- Refresh tokens
- User preferences
- Tracking simple client state

## Setting a Cookie

Express can set a cookie using:

```ts
res.cookie("theme", "dark");
```

This sends a `Set-Cookie` header to the browser.

## Reading Cookies

To read cookies in Express, we commonly use the `cookie-parser` package.

```ts
import cookieParser from "cookie-parser";

app.use(cookieParser());
```

Then cookies are available in:

```ts
req.cookies
```

Example:

```ts
const theme = req.cookies.theme;
```

## Clearing a Cookie

A cookie can be cleared using:

```ts
res.clearCookie("theme");
```

## Cookie Options

Common cookie options include:

```ts
res.cookie("refreshToken", token, {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});
```

## Important Options

### `httpOnly`

If `httpOnly` is true, JavaScript in the browser cannot access the cookie.

This is useful for sensitive cookies like refresh tokens.

### `secure`

If `secure` is true, the cookie is sent only over HTTPS.

### `sameSite`

`sameSite` controls when cookies are sent with cross-site requests.

It helps reduce CSRF risk.

## Real Project Usage

In real applications, refresh tokens are often stored in httpOnly cookies.

This is safer than storing sensitive tokens in browser JavaScript-accessible storage.

## Summary

Cookies store small data in the browser. Express can set cookies using `res.cookie()`, read cookies using `cookie-parser`, and clear cookies using `res.clearCookie()`. Sensitive cookies should usually use `httpOnly`, `secure`, and `sameSite` options.

## Practice Questions

### Q1. What is a cookie?

A cookie is a small piece of data stored in the browser.

### Q2. Which Express method sets a cookie?

`res.cookie()`.

### Q3. Which package helps read cookies in Express?

`cookie-parser`.

### Q4. Why is `httpOnly` useful?

It prevents browser JavaScript from reading the cookie.

### Q5. Which method clears a cookie?

`res.clearCookie()`.
