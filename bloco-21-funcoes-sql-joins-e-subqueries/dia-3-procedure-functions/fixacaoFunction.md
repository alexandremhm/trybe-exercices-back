Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .

```sql
DELIMITER $$

CREATE FUNCTION AmountOfPaymentsById(customer_id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payment INT;
    SELECT count(customer_id) FROM payment	
    WHERE sakila.payment.customer_id = customer_id
	GROUP BY customer_id 
    INTO total_payment;
    RETURN total_payment;
END $$

DELIMITER ;
```

Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.

```sql

DELIMITER $$

CREATE FUNCTION searchFIlmById(film_id_input INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE film_name VARCHAR(100);
    SELECT a.title FROM film AS a
	INNER JOIN inventory AS b
	ON a.film_id = b.film_id
	WHERE a.film_id = film_id_input
	LIMIT 1
    INTO film_name ;
    RETURN film_name ;
END $$

DELIMITER ;
```

Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.

```sql

```
