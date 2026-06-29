# 16 - Request Parameters

Request parameters are values sent by the client to the server as part of an API request.

In Express.js, we commonly read client data using `req.params`, `req.query`, and `req.body`.

## Simple Definition

Request parameters are values received from the client request. Express provides different places to read them depending on how the data is sent.

## Main Types

### `req.params`

`req.params` is used to read dynamic values from the route path.

Example request:

```txt
GET /users/15
```

Express route:

```ts
app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});
```

Result:

```ts
req.params.id // "15"
```

### `req.query`

`req.query` is used to read values after `?` in the URL. It is commonly used for search, filters, sorting, and pagination.

Example request:

```txt
GET /products?page=2&limit=10
```

Result:

```ts
req.query.page  // "2"
req.query.limit // "10"
```

### `req.body`

`req.body` is used to read data sent inside the request body. It is commonly used with `POST`, `PUT`, and `PATCH` requests.

Example request body:

```json
{
  "name": "Ali",
  "age": 25
}
```

Result:

```ts
req.body.name // "Ali"
req.body.age  // 25
```

To read JSON body data, we need:

```ts
app.use(express.json());
```

## Memory Trick

```txt
params -> values in the route path
query  -> values after ? in the URL
body   -> values inside the request body
```

## Combined Example

Request:

```txt
GET /users/15?active=true
```

Result:

```ts
req.params.id     // "15"
req.query.active  // "true"
```

## Summary

Express gives us `req.params`, `req.query`, and `req.body` to read data from client requests. `req.params` reads dynamic route values, `req.query` reads URL query string values, and `req.body` reads data sent in the request body.

## Practice Questions

### Q1. Where do we read `15` from `GET /users/15`?

We read it from `req.params.id`.

### Q2. Where do we read `page` and `limit` from `GET /products?page=2&limit=10`?

We read them from `req.query.page` and `req.query.limit`.

### Q3. Where do we read `name` and `age` from a POST request body?

We read them from `req.body.name` and `req.body.age`.

### Q4. Why do we use `app.use(express.json())`?

We use `app.use(express.json())` so Express can parse incoming JSON request bodies and make them available in `req.body`.

### Q5. In `GET /users/15?active=true`, where do we read `15` and `active`?

`15` is read from `req.params.id`.

`active` is read from `req.query.active`.
