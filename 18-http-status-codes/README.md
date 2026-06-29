# 18 - HTTP Status Codes

HTTP status codes are 3-digit numbers sent by the server to tell the client the result of a request.

They help the client understand whether the request was successful, failed due to a client mistake, or failed due to a server problem.

## Simple Definition

An HTTP status code tells the client what happened with the request.

## Status Code Categories

| Range | Meaning |
| --- | --- |
| `1xx` | Informational |
| `2xx` | Success |
| `3xx` | Redirection |
| `4xx` | Client error |
| `5xx` | Server error |

For most APIs, we commonly use `2xx`, `4xx`, and `5xx`.

## Common Status Codes

### `200 OK`

The request was successful.

Example:

```ts
res.status(200).json({ message: "Success" });
```

### `201 Created`

A new resource was created successfully.

Example:

```ts
res.status(201).json({ message: "User created" });
```

### `204 No Content`

The request was successful, but there is no response body.

Commonly used for successful delete operations.

Example:

```ts
res.status(204).send();
```

### `400 Bad Request`

The client sent invalid data.

Example:

```ts
res.status(400).json({ message: "Email is required" });
```

### `401 Unauthorized`

Authentication is missing or invalid.

Example:

```ts
res.status(401).json({ message: "Unauthorized" });
```

### `403 Forbidden`

The user is authenticated but does not have permission.

Example:

```ts
res.status(403).json({ message: "Forbidden" });
```

### `404 Not Found`

The requested resource does not exist.

Example:

```ts
res.status(404).json({ message: "User not found" });
```

### `500 Internal Server Error`

An unexpected server error happened.

Example:

```ts
res.status(500).json({ message: "Something went wrong" });
```

## Memory Trick

```txt
200 -> Success
201 -> Created
204 -> Success with no response body

400 -> Bad client request
401 -> Not authenticated
403 -> Authenticated but not allowed
404 -> Resource not found

500 -> Server error
```

## Summary

HTTP status codes help APIs communicate request results clearly. `2xx` means success, `4xx` means the client made a mistake, and `5xx` means something failed on the server.

## Practice Questions

### Q1. User created successfully. Which status code?

`201 Created`.

### Q2. Email field is missing. Which status code?

`400 Bad Request`.

### Q3. JWT token is missing. Which status code?

`401 Unauthorized`.

### Q4. JWT is valid but the user is not an admin. Which status code?

`403 Forbidden`.

### Q5. Requested order does not exist. Which status code?

`404 Not Found`.

### Q6. Unexpected server exception. Which status code?

`500 Internal Server Error`.
