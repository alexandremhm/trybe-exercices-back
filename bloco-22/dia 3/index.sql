-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.


CREATE FULLTEXT INDEX index_name ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action'); 
-- 0,35

DROP INDEX index_name ON sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- 1.85

-- Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX index_address ON sakila.address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- 0.35

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- 61.80