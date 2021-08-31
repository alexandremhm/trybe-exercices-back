Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

```sql
    SELECT rating, AVG(length) AS 'Média'
    FROM sakila.film
    GROUP BY rating
    HAVING Média BETWEEN 115.0 AND 121.50
    ORDER BY Média DESC
```


Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.



```sql
    SELECT rating, SUM(replacement_cost) AS Replacement_cost
    FROM sakila.film
    GROUP by rating
    HAVING Replacement_cost > 3950.50
    ORDER BY Replacement_cost DESC
```