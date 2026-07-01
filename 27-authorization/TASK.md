# Practice Task - Authorization

## Task 1

Create:

```txt
27-authorization/src/index.ts
```

## Task 2

Create a hardcoded authenticated user:

```ts
const user = {
  id: 1,
  name: "Ahmed",
  role: "user"
};
```

## Task 3

Create an authorization middleware named `requireAdmin`.

If user role is not `admin`, return status `403`:

```json
{
  "message": "Forbidden"
}
```

Important: use `return` so the request stops.

## Task 4

If user role is `admin`, call:

```ts
next();
```

## Task 5

Create this public route:

```txt
GET /
```

Return:

```json
{
  "message": "Public route"
}
```

## Task 6

Create this normal authenticated route:

```txt
GET /profile
```

Return:

```json
{
  "message": "Profile data",
  "user": {}
}
```

Use the hardcoded `user` object for the user value.

## Task 7

Create this admin-only route:

```txt
GET /admin
```

Use `requireAdmin` middleware.

If user is admin, return:

```json
{
  "message": "Admin data"
}
```

## Task 8

Test with:

```ts
role: "user"
```

Expected `/admin`: `403 Forbidden`.

Then change to:

```ts
role: "admin"
```

Expected `/admin`: `200 OK` with admin data.

## Task 9

Add script in `package.json`:

```json
"dev:authorization": "tsx 27-authorization/src/index.ts"
```

## Expected Understanding

After this topic, I should be able to:

- Explain authorization
- Understand role-based access
- Return `403 Forbidden`
- Create authorization middleware
- Understand authentication vs authorization
