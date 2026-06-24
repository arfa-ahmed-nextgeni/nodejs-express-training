# 15 - Routing

Routing means defining how the server responds to different HTTP methods and URL paths.

In Express.js, routing is commonly done using methods like `app.get()`, `app.post()`, `app.put()`, `app.patch()`, and `app.delete()`.

## Simple Definition

Routing is the process of matching an incoming request method and path to the correct handler function.

## Key Terms

### Route

A route is the URL path.

Examples:

```txt
/users
/products
/orders
```

### HTTP Method

An HTTP method defines the action of the request.

Examples:

```txt
GET     -> Read data
POST    -> Create data
PUT     -> Replace data
PATCH   -> Partially update data
DELETE  -> Delete data
```

### Endpoint

An endpoint is the combination of HTTP method and route.

Examples:

```txt
GET /users
POST /users
DELETE /users/5
```

`GET /users` and `POST /users` use the same route, but they are different endpoints because the HTTP method is different.

## Express Routing Example

```ts
app.get("/users", (_req, res) => {
  res.send("Get users");
});

app.post("/users", (_req, res) => {
  res.send("Create user");
});

app.delete("/users/:id", (req, res) => {
  res.send(`Delete user ${req.params.id}`);
});
```

## Summary

Routing helps us define different API endpoints. Express matches requests using both the HTTP method and the route path. This makes API code cleaner and easier to maintain.

## Practice Questions

### Q1. What is a route?

A route is the URL path used to identify a resource or action.

### Q2. What is an HTTP method?

An HTTP method defines the action of the request, such as GET, POST, PUT, PATCH, or DELETE.

### Q3. What is an endpoint?

An endpoint is the combination of HTTP method and route path.

### Q4. Are `GET /users` and `POST /users` the same endpoint?

No. They use the same route path, but they are different endpoints because the HTTP method is different.
