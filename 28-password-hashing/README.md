# 28 - Password Hashing

## Objective

Learn why passwords should not be stored as plain text and how to hash passwords using `bcrypt`.

## Theory

Password hashing means converting a plain password into a fixed-looking unreadable value before storing it.

Example plain password:

```txt
myPassword123
```

Example hashed password:

```txt
$2b$10$R8U9X...long-random-looking-value
```

Hashing is one-way. That means we cannot decrypt the hash back to the original password.

Instead of decrypting, we compare the plain password with the stored hash.

## Why Password Hashing Is Important

Passwords should never be stored as plain text.

If a database is leaked and passwords are plain text, attackers can directly read all user passwords.

If passwords are hashed, attackers cannot directly see the original password.

## Hashing vs Encryption

Hashing and encryption are different.

```txt
Hashing    -> one-way, cannot be reversed
Encryption -> two-way, can be decrypted with a key
```

Passwords should be hashed, not encrypted.

## bcrypt

`bcrypt` is a popular password hashing library.

It provides two important functions:

```ts
bcrypt.hash(password, saltRounds)
bcrypt.compare(password, hashedPassword)
```

## Hash Example

```ts
const hashedPassword = await bcrypt.hash("myPassword123", 10);
```

Here, `10` is the salt rounds value. Higher value means stronger but slower hashing.

## Compare Example

```ts
const isMatch = await bcrypt.compare("myPassword123", hashedPassword);
```

If the password matches the hash, `isMatch` will be `true`.

## Real Project Usage

Password hashing is used in real APIs for:

- User registration
- User login
- Password reset
- Account security

Flow:

```txt
Register:
plain password -> hash password -> store hash

Login:
plain password -> compare with stored hash -> allow or reject
```

## Summary

Password hashing protects user passwords. We store only the hashed password, not the plain password. During login, we use `bcrypt.compare()` to check whether the entered password matches the stored hash.

## Practice Questions

### Q1. What is password hashing?

Password hashing means converting a plain password into a one-way unreadable value before storing it.

### Q2. Should we store plain passwords in a database?

No. Plain passwords should never be stored.

### Q3. Can a hash be decrypted back to the original password?

No. Hashing is one-way and cannot be reversed.

### Q4. How do we check a login password if we cannot decrypt the hash?

We compare the plain password with the stored hash using `bcrypt.compare()`.

### Q5. Which bcrypt function creates a password hash?

`bcrypt.hash()`.
