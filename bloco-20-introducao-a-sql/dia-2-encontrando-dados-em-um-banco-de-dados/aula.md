```sql
SELECT DISTINCT first_name FROM customer;
SELECT CONCAT(store_id, last_name) FROM customer;
SELECT COUNT(*) FROM customer;
SELECT COUNT(address2) from address;
SELECT * FROM country LIMIT 3 offset 2;
SELECT * FROM country WHERE country != 'Brazil';
SELECT * FROM country ORDER BY country_id;
SELECT * FROM country WHERE country LIKE '%gla%';
```