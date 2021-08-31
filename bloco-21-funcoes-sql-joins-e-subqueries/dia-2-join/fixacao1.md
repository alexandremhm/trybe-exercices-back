Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .

```sql
SELECT actor.actor_id, actor.first_name, film.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film
ON actor.actor_id = film.actor_id
```

Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .

```sql
SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON staff.address_id = address.address_id
```

Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

```sql
SELECT customer.customer_id, customer.email, address.address_id, address.address
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
ORDER BY customer.first_name DESC 
LIMIT 100
```

Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .

```sql
SELECT customer.first_name, customer.email, address.district, address.address
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
WHERE address.district = 'California' AND
first_name LIKE ('%rene%')
```

Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. 
Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .

```sql
SELECT customer.first_name, COUNT(address.address)
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
WHERE customer.active = 1
GROUP BY customer.first_name
```
Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

```sql
SELECT staff.first_name, staff.last_name, AVG(payment.amount) AS payment_avg
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS payment
ON staff.staff_id = payment.staff_id
WHERE YEAR(payment.payment_date) = 2006
GROUP BY staff.first_name, staff.last_name
```

Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .

```sql
SELECT actor.actor_id, actor.first_name, film_actor.film_id, film.title
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id
INNER JOIN sakila.film AS film
ON film_actor.film_id = film.film_id
```