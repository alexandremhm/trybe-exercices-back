Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

```sql
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;
```

Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

```sql
SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.rental_duration = t2.rental_duration 
HAVING t2.rental_duration BETWEEN 2 AND 4;
```