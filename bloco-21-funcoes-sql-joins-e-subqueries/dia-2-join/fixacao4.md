Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.

```sql
SELECT id, title FROM Books AS b
WHERE NOT EXISTS (
	SELECT * FROM Books_Lent
    WHERE book_id = b.id
    )
```

Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

```sql
SELECT id, title FROM Books AS b
WHERE EXISTS (
	SELECT * FROM Books_Lent
    WHERE book_id = b.id AND
    returned = 0 AND
    b.title LIKE ('%lost')
    )
```

Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.

```sql
SELECT name FROM Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM CarSales
    WHERE CustomerId = c.CustomerId
    )
```

Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.

```sql
SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);
```