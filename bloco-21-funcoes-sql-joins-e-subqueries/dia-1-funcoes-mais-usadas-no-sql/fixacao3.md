Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.

```sql
SELECT 15,
	IF(15 MOD 3 = 0, 'É ÍMPAR', 'É PAR')
  AS 'Par ou Ímpar'
```

Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

```sql
SELECT 220 DIV 12
```

Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

```sql
SELECT 220,
	IF(220 MOD 12 > 0, 220 MOD 12, 0)
```

Monte uma query que gere um valor entre 15 e 20 .

```sql
SELECT FLOOR(15 + (RAND() * 5))
```

Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

```sql
SELECT ROUND(15.7515971, 5)
```

Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

```sql
SELECT FLOOR(39.494)
```

Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

```sql
SELECT CEIL(85.234)
```
