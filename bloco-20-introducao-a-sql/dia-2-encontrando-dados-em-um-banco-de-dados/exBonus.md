Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .

```sql
SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT'
```

Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

```sql
SELECT * FROM Provides
ORDER BY Price LIMIT 5
```

Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores 
preços, começando a lista a partir do 3º item.

```sql
SELECT Provider, Price FROM Provides
ORDER BY Price DESC LIMIT 4 OFFSET 3
```

Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.

```sql
SELECT * FROM Provides
WHERE Provider = 'HAL' 
ORDER BY Price DESC
```

Escreva uma query para exibir por quantas empresas a peça 1 é provida.

```sql
SELECT COUNT(*) FROM Provides
WHERE Piece = '1'
```

Find the movies released in the years between 2000 and 2010 

```sql
SELECT * FROM movies
WHERE Year BETWEEN 2000 AND 2010
```

Find the movies not released in the years between 2000 and 2010

```sql
SELECT * FROM movies
WHERE Year NOT BETWEEN 2000 AND 2010
```

Find the first 5 Pixar movies and their release year

```sql
SELECT Title, Year FROM movies LIMIT 5
```
