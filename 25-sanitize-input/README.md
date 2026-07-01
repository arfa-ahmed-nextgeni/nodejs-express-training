# 25 - Sanitize Input

## Objective

Learn how to clean user input before using or storing it in an Express.js API.

## Theory

Sanitization means cleaning input data to remove unwanted, unsafe, or unnecessary values.

Validation and sanitization are related, but they are not the same.

- Validation checks whether input is acceptable.
- Sanitization cleans or normalizes the input.

Example:

```txt
"  ahmed@example.com  "
```

After sanitization:

```txt
"ahmed@example.com"
```

Another example:

```txt
"   Ahmed   "
```

After sanitization:

```txt
"Ahmed"
```

## Common Sanitization Examples

Common sanitization tasks include:

- Trimming extra spaces
- Converting email to lowercase
- Removing unwanted HTML tags
- Normalizing strings
- Cleaning search input

## Why Sanitization Is Important

Without sanitization, the application may store messy or unsafe data.

Example problems:

- Extra spaces in names or emails
- Different email casing causing duplicate accounts
- Unsafe HTML being displayed later
- Bad search query formatting

## Example

```ts
const sanitizedUser = {
  name: req.body.name.trim(),
  email: req.body.email.trim().toLowerCase()
};
```

Input:

```json
{
  "name": "  Ahmed  ",
  "email": "  AHMED@EXAMPLE.COM  "
}
```

Output:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com"
}
```

## Real Project Usage

Sanitization is commonly used in APIs for:

- User registration
- Login forms
- Search inputs
- Profile forms
- Contact forms
- Product titles and descriptions

## Important Note

Sanitization should not replace validation.

Usually, we do both:

```txt
1. Validate input
2. Sanitize input
3. Use or save input
```

## Summary

Sanitization cleans user input before using it. It helps keep data consistent, clean, and safer. Common examples include trimming spaces and converting emails to lowercase.

## Practice Questions

### Q1. What is sanitization?

Sanitization means cleaning input data before using or storing it.

### Q2. What is the difference between validation and sanitization?

Validation checks whether input is acceptable. Sanitization cleans or normalizes the input.

### Q3. Why should we trim input values?

We trim input values to remove unnecessary spaces from the beginning and end.

### Q4. Why should we convert emails to lowercase?

We convert emails to lowercase to keep email data consistent and avoid duplicate-looking values.

### Q5. Should sanitization replace validation?

No. Sanitization should be used together with validation, not instead of it.
