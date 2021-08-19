Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".

```sql
SELECT "This is SQL Exercise, Practice and Solution"
```

Escreva uma query para exibir três números em três colunas.

```sql
SELECT 10, 2, 5
```

Escreva uma query para exibir a soma dos números 10 e 15.

```sql
SELECT 10 + 15 
```

Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

```sql
SELECT 10 * 5
```

Escreva uma query para exibir todas as informações de todos os cientistas.

```sql
SELECT * from Scientists
```

Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.

```sql
SELECT Name as "Nome do Projeto", Hours as "Tempo de Trabalho" from Projects
```

Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

```sql
SELECT * from Scientists
ORDER BY Name
```

Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

```sql
SELECT * from Scientists
ORDER BY Name DESC
```

Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.

```sql
SELECT CONCAT("O projeto ", Name, "precisou de ", Hours, " horas para ser concluído") from Projects
```

Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

```sql
SELECT CONCAT("O projeto ", Name, "precisou de ", Hours, " horas para ser concluído") from Projects
ORDER BY HOURS DESC LIMIT 3
```

Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.

```sql
SELECT DISTINCT Project from AssignedTo
```

Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

```sql
SELECT Name from Projects
ORDER BY Hours DESC Limit 1 
```

Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

```sql
SELECT Name from Projects
ORDER BY Hours ASC Limit 1 OFFSET 1
```

Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

```sql
SELECT * from Projects
ORDER BY Hours ASC Limit 5
```

Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

```sql
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') from Scientists
```
