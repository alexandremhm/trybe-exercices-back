Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.

```sql
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('Hicks', 'Crawford', 'Henry', 'Mason', 'Morales', 'Kennedy')
ORDER BY last_name
```

Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.

```sql
SELECT email FROM sakila.customer
WHERE address BETWEEN 172 AND 176
ORDER BY email
```

Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia , diferente do formato brasileiro, que é dia/mês/ano .

```sql
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01'
```

Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.

```sql
SELECT * FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title
```

Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.

```sql
SELECT * FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
```