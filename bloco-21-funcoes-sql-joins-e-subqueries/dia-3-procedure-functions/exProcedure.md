```sql
DELIMITER $$
	CREATE PROCEDURE ChegamosCarnaval(IN mes INT, OUT resultado VARCHAR(100))
    BEGIN
		DECLARE mensagem VARCHAR(100);
        IF mes = 2 THEN
			SET = 'Estamos no Carnaval';
		ELSE
			SET= 'Nao estamaos no Carnaval';
		END IF;
        SELECT mensagem into resultado;
	END $$
DELIMITER ;
```