# Practice Task - Refresh Token

## Task 1

Create:

```txt
30-refresh-token/src/index.ts
```

`jsonwebtoken` is already installed from the JWT topic.

## Task 2

Create two signing keys:

```ts
const ACCESS_TOKEN_SECRET = "demo-access-token-key";
const REFRESH_TOKEN_SECRET = "demo-refresh-token-key";
```

For practice this is okay, but in real projects these values should come from environment variables.

## Task 3

Create this login route:

```txt
POST /login
```

For practice, accept any email and create two tokens:

```ts
const payload = { id: 1, email: req.body.email, role: "user" };

const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
```

Return:

```json
{
  "message": "Login successful",
  "accessToken": "generated-access-token",
  "refreshToken": "generated-refresh-token"
}
```

## Task 4

Create this refresh route:

```txt
POST /refresh
```

It should read `refreshToken` from `req.body`.

If refresh token is missing, return status `401`:

```json
{
  "message": "Refresh token is required"
}
```

## Task 5

Verify refresh token using:

```ts
jwt.verify(refreshToken, REFRESH_TOKEN_SECRET)
```

If refresh token is invalid, return status `401`:

```json
{
  "message": "Invalid refresh token"
}
```

If refresh token is valid, create a new access token and return:

```json
{
  "accessToken": "new-generated-access-token"
}
```

## Task 6

Create an auth middleware for access token.

It should read the access token from Authorization header:

```txt
Bearer access-token
```

Verify it using:

```ts
jwt.verify(token, ACCESS_TOKEN_SECRET)
```

If missing or invalid, return status `401`.

## Task 7

Create this protected route:

```txt
GET /profile
```

Use the auth middleware.

Return:

```json
{
  "message": "Profile data"
}
```

## Task 8

Add script in `package.json`:

```json
"dev:refresh-token": "tsx 30-refresh-token/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain access token
- Explain refresh token
- Understand why access token expires quickly
- Create a new access token using a refresh token
- Protect a route using access token
