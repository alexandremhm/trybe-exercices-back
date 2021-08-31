Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

```sql
SELECT f.title, s.domestic_sales, s.international_sales from Movies AS f
INNER JOIN BoxOffice as s
ON s.movie_id = f.id
```

Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).


```sql
SELECT f.title, s.international_sales, s.domestic_sales from Movies AS f
INNER JOIN BoxOffice as s
ON s.movie_id = f.id
WHERE s.international_sales > s.domestic_sales
```

Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.


```sql
SELECT f.title, s.rating from Movies AS f
INNER JOIN BoxOffice as s
ON s.movie_id = f.id
ORDER BY f.rating DESC
```

Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.


```sql
SELECT t.*, f.* from Theater AS t
LEFT JOIN Movies as f
ON t.id = f.theater_id
ORDER BY t.name
```

Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.


```sql
SELECT t.*, f.* from Theater AS t
RIGHT JOIN Movies as f
ON t.id = f.theater_id
 ORDER BY t.name

```

Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

```sql
SELECT f.title FROM Movies AS f
INNER JOIN BoxOffice as r
ON r.movie_id = f.id
WHERE r.rating > 7.5;

---

SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);
```

Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

```sql
SELECT r.rating FROM BoxOffice AS r
INNER JOIN Movies as f
ON r.movie_id = f.id
WHERE f.year > 2009;

---

SELECT 
    rating
FROM
    BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);
```

Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

```sql
SELECT name, location FROM Theater as t
WHERE EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = t.id
    )
```

Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

```sql
SELECT name, location FROM Theater as t
WHERE NOT EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = t.id
    )
```

Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

```sql
SELECT a.title, a.director, a.year, b.rating, c.name
FROM Movies AS a
INNER JOIN BoxOffice as b
ON b.movie_id = a.id
INNER JOIN Theater as c
ON a.theater_id = c.id
WHERE b.rating > 8
```

Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

```sql
SELECT f1.title, f1.length_minutes, f2.title, f2.length_minutes
FROM Movies AS f1, Movies as f2
WHERE f1.director = f2.director
```

Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

```sql
SELECT a.title FROM Movies AS a
INNER JOIN BoxOffice AS b
ON b.movie_id = a.id
WHERE b.international_sales + b.domestic_sales > 500000000;

---

SELECT title FROM Movies
WHERE id  IN
( SELECT movie_id FROM
	BoxOffice
    WHERE international_sales + domestic_sales > 500000000
)
```