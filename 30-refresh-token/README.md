# 30 - Refresh Token

## Objective

Learn how refresh tokens help users stay logged in without entering their password again.

## Theory

In JWT authentication, we commonly use two types of tokens:

```txt
Access Token
Refresh Token
```

## Access Token

An access token is used to access protected APIs.

Example:

```txt
GET /profile
Authorization: Bearer access-token
```

Access tokens usually expire quickly, for example in 15 minutes.

This is safer because if someone steals an access token, it will stop working soon.

## Refresh Token

A refresh token is used to get a new access token.

Refresh tokens usually live longer, for example 7 days.

When the access token expires, the client can send the refresh token to get a new access token.

## Basic Flow

```txt
1. User logs in
2. Server returns access token and refresh token
3. Client uses access token for protected APIs
4. Access token expires
5. Client sends refresh token to /refresh
6. Server verifies refresh token
7. Server returns a new access token
```

## Why Use Refresh Tokens?

Without refresh tokens, the user would need to login again whenever the access token expires.

Refresh tokens improve user experience while keeping access tokens short-lived.

## Access Token vs Refresh Token

```txt
Access Token  -> short life, used for protected routes
Refresh Token -> longer life, used to create a new access token
```

## Real Project Usage

Refresh tokens are commonly used in:

- Web apps
- Mobile apps
- E-commerce login sessions
- Admin dashboards
- Long user sessions

In production, refresh tokens are usually stored securely, often in httpOnly cookies or in a database-backed session/token store.

## Important Note

A refresh token should be protected carefully because it can create new access tokens.

Never put passwords or sensitive secrets inside token payloads.

## Summary

Refresh tokens help renew short-lived access tokens. Access tokens are used for protected APIs. Refresh tokens are used only to request a new access token.

## Practice Questions

### Q1. What is an access token used for?

An access token is used to access protected API routes.

### Q2. What is a refresh token used for?

A refresh token is used to get a new access token.

### Q3. Which token usually has a shorter expiry?

The access token usually has a shorter expiry.

### Q4. Why do we use refresh tokens?

We use refresh tokens so users can stay logged in without entering their password again every time the access token expires.

### Q5. Should refresh tokens be protected carefully?

Yes. Refresh tokens should be protected carefully because they can create new access tokens.
