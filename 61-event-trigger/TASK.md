# Task - Database Triggers

## Goal
Understand what happens when a product price changes, and practice an AFTER UPDATE trigger.

## Tool note
The DBML editor at https://runsql.com/r is useful for drawing tables and practicing SELECT queries. **DBML is not trigger SQL.** You cannot define a trigger using DBML.

For this task, first read the trigger example in README.md. To execute it, use a MySQL environment that supports CREATE TRIGGER, such as a local MySQL database with DBeaver. If your online tool does not support triggers, complete the written questions first.

## Database schema (DBML reference)

```dbml
Table products {
  id integer [primary key]
  name varchar(100)
  price decimal(10,2)
}

Table price_history {
  id integer [primary key]
  product_id integer
  old_price decimal(10,2)
  new_price decimal(10,2)
}

Ref: price_history.product_id > products.id
```

## Practice
1. Explain when an AFTER UPDATE trigger runs.
2. Explain what OLD.price and NEW.price mean.
3. Write a trigger that records the old and new price when a product price changes. Use the README example as a guide.
4. Explain why updating only a product name should not create a price-history row.
5. Explain one benefit and one risk of triggers.

## Optional SQL test (MySQL)
After creating the tables and trigger from README.md:

```sql
INSERT INTO products (id, name, price) VALUES (1, 'Product A', 100.00);
UPDATE products SET price = 120.00 WHERE id = 1;
SELECT * FROM price_history;
```

Expected result: one history row showing product 1 changed from 100.00 to 120.00.

## Submission
Create `trigger-answers.md` in this topic folder. Include your answers and SQL. You do not need to install MySQL only to finish the written part.
