Exclua do banco de dados o ator com o nome de "KARL".

```sql
DELETE FROM sakila.actor
WHERE first_name = "KARL"
```

Exclua do banco de dados os atores com o nome de "MATTHEW".

```sql
DELETE from sakila.film_actor
WHERE actor_id IN (8, 103, 181)

SELECT * FROM sakila.actor 
WHERE first_name = 'MATTHEW'

```

Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

```sql
DELETE FROM sakila.film_text 
WHERE description   LIKE '%saga%'

```

Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .

```sql
TRUNCATE sakila.film_actor
TRUNCATE sakila. film_category
```

Exclua o banco de dados e o recrie (use as instruções no início desta aula).
