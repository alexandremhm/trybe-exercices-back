Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

```sql
SELECT UCASE('trybe')
```

Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .

```sql
SELECT REPLACE ('Você já ouviu falar do DuckDuckGo?', 'do DuckDuckGo', 'do Google')
```

Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .

```sql
SELECT LENGTH ('Uma frase qualquer')
```

Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .

```sql
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
```

Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.

```SQL
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL')
```