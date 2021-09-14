-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_with_categories AS 
SELECT a.title, b.category_id, c.name from film AS a
INNER JOIN film_category AS b
ON a.film_id = b.film_id
INNER JOIN category AS c
ON b.category_id = c.category_id
ORDER BY a.title; 

-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.


CREATE VIEW film_info AS 
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, c.title from actor AS a
INNER JOIN film_actor AS b
ON a.actor_id = b.actor_id
INNER JOIN film AS c
ON b.film_id = c.film_id
ORDER BY actor;

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

CREATE VIEW address_info AS 
SELECT a.address_id , a.address , a.district , b.city_id, b.city from address AS a
INNER JOIN city AS b
ON a.city_id = b.city_id
ORDER BY city

-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

CREATE VIEW movies_languages AS 
SELECT a.title, b.language_id , a.film_id, b.name from film AS a
INNER JOIN language AS b
ON a.language_id = b.language_id

