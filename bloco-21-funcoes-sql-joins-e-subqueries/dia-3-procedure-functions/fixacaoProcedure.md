Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber 
parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.


```sql
DELIMITER $$

CREATE PROCEDURE tenMostPopularActorsByAmountOfFilms()
BEGIN
	select actor_id, COUNT(*) AS amoutOfFilms from film_actor
	GROUP BY actor_id;
END $$

CALL tenMostPopularActorsByAmountOfFilms()
```

Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.


```sql
SELECT a.film_id, a.title, b.category_id, b.name from film AS a
INNER JOIN category AS b
WHERE EXISTS 
( select * from film_category as c
	where c.category_id = b.category_id AND
	a.film_id = c.film_id);
                  
SELECT f.film_id, f.title, c.category_id, c.`name`
FROM film AS f INNER JOIN category AS c
	WHERE EXISTS (
		SELECT fc.film_id, fc.category_id FROM film_category AS fc
        WHERE fc.film_id = f.film_id
        AND fc.category_id = c.category_id
    )
    
SELECT f.film_id, f.title, c.category_id, c.`name` from film AS f
INNER JOIN film_category AS fc
ON f.film_id = fc.film_id
INNER JOIN category AS c
ON fc.category_id = c.category_id
WHERE c.name = 'action';

DELIMITER $$

CREATE PROCEDURE searchFilmByCategory(IN category VARCHAR(50))
BEGIN 
	SELECT f.film_id, f.title, c.category_id, c.`name`
	FROM film AS f INNER JOIN category AS c
	WHERE EXISTS (
		SELECT fc.film_id, fc.category_id FROM film_category AS fc
        WHERE fc.film_id = f.film_id
        AND fc.category_id = c.category_id
    )
AND c.`name` = category;

END $$


```

Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.


```sql
DELIMITER $$

DELIMITER $$

CREATE PROCEDURE isActiveOrNotByEmail(IN emailIN VARCHAR(100), OUT isActiveOrNot VARCHAR(100))
BEGIN 
	SELECT CONCAT(first_name,' ', last_name,' ', 'status: ', active) INTO isActiveOrNot
	FROM customer
    WHERE email = emailIN;
END $$

call isActiveOrNotByEmail('MARY.SMITH@sakilacustomer.org', @variavel);
SELECT @variavel;
```
