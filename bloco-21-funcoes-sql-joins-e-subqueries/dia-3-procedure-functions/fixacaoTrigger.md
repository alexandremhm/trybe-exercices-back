Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .

```sql
DELIMITER $$

CREATE TRIGGER trigger_car_insert
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERCAO',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;
```

Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

```sql
DELIMITER $$

CREATE TRIGGER trigger_car_update
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
	END $$

DELIMITER ;
```

Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.


```sql
DELIMITER $$

CREATE TRIGGER trigger_car_delete
	AFTER UPDATE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes (tipo_operacao, data_ocorrido)
	VALUES ('EXCLUSAO', NOW());
END $$

DELIMITER ;
```