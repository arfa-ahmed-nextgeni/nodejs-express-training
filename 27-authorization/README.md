# 27 - Authorization

## Objective

Learn how to check whether an authenticated user has permission to access a specific route.

## Theory

Authorization means checking what an authenticated user is allowed to do.

Authentication and authorization are different:

```txt
Authentication -> Who are you?
Authorization  -> What are you allowed to access?
```

Example:

- A user is authenticated after sending a valid token.
- But only users with role `admin` should access `/admin`.

If the user is authenticated but does not have permission, the API should return:

```txt
403 Forbidden
```

## Example User

For practice, we can use a simple hardcoded user object:

```ts
const user = {
  id: 1,
  name: "Ahmed",
  role: "user"
};
```

If `role` is `user`, the user should not access admin routes.

If `role` is `admin`, the user can access admin routes.

## Authorization Middleware

```ts
function requireAdmin(_req, res, next) {
  if (user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
}
```

## Protected Admin Route

```ts
app.get("/admin", requireAdmin, (_req, res) => {
  res.json({ message: "Admin data" });
});
```

If the user is not admin, route handler will not run.

## Real Project Usage

Authorization is used in real APIs for:

- Admin dashboards
- Role-based access control
- Order ownership checks
- Customer profile access
- Permission-based actions
- Protecting sensitive business operations

## Status Code

Use:

```txt
401 Unauthorized -> user is not authenticated
403 Forbidden    -> user is authenticated but not allowed
```

## Summary

Authorization checks permissions after authentication. It decides whether the authenticated user can access a specific resource. If the user is authenticated but lacks permission, the API should return `403 Forbidden`.

## Practice Questions

### Q1. What is authorization?

Authorization means checking what an authenticated user is allowed to access.

### Q2. What is the difference between authentication and authorization?

Authentication checks who the user is. Authorization checks what the user can access.

### Q3. Which status code should be returned when authenticated user has no permission?

`403 Forbidden`.

### Q4. Can a normal authenticated user access admin route?

No, unless the user has admin permission or admin role.

### Q5. Which should come first: authentication or authorization?

Authentication should come first, then authorization.
