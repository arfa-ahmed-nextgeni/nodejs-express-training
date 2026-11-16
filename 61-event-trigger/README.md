# 61 - Event Trigger

## Objective
Understand database triggers and when to use them.

## What is a trigger?
A trigger is database code that runs automatically when a specific event happens on a table.

Common events:
- INSERT: a row is added
- UPDATE: a row changes
- DELETE: a row is removed

A trigger can run BEFORE or AFTER the event, depending on the database.

## Example
Imagine an online store. When a product price changes, we want to save the old and new prices in a history table.

Tables:
- products: id, name, price
- price_history: id, product_id, old_price, new_price

An AFTER UPDATE trigger can record a price change automatically.

## MySQL example

```sql
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2)
);

CREATE TABLE price_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  old_price DECIMAL(10,2),
  new_price DECIMAL(10,2)
);

DELIMITER //
CREATE TRIGGER log_price_change
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
  IF OLD.price <> NEW.price THEN
    INSERT INTO price_history (product_id, old_price, new_price)
    VALUES (NEW.id, OLD.price, NEW.price);
  END IF;
END//
DELIMITER ;
```

- OLD means the value before the change.
- NEW means the value after the change.
- FOR EACH ROW means the trigger runs for each affected row.
- DELIMITER is a MySQL client command. Some online SQL tools do not support it.

## BEFORE vs AFTER
- BEFORE: runs before the row change. Often used to check or adjust values.
- AFTER: runs after the row change. Often used to record history.

## Benefits
- Automatically records changes.
- Applies the same rule to different applications using the database.

## Limitations
- Triggers can make database behavior harder to understand.
- Too many triggers can slow down writes.
- Trigger syntax differs between MySQL and PostgreSQL.
- Do not use triggers for every business rule. Sometimes application code is easier to maintain.

## Trigger vs event scheduler
A trigger responds to a database event, such as UPDATE.
A scheduled event runs at a chosen time. They are different features.

## Practice questions
1. What is a trigger?
2. What is the difference between BEFORE and AFTER?
3. What do OLD and NEW mean?
4. Why might a price history trigger be useful?
5. Why should triggers be used carefully?
