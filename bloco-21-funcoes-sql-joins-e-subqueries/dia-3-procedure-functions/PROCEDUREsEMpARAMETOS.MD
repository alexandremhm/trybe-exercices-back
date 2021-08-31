Procedure sem parâmetros:
Normalmente é utilizada para realizar queries mais simples.
Exemplo: Aqui estamos apenas executando uma busca na tabela actor e exibindo os resultados.

```sql
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();
```