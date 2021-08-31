
```sql
DELIMITER $$

CREATE FUNCTION retornaMedia(selectedTeam VARCHAR(50), selectedPosition VARCHAR(3))
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE average DOUBLE;
	SELECT AVG(overall)
    FROM player
    WHERE team=selectedTeam AND position LIKE CONCAT('%', selectedPosition, '%') 
    INTO average;
RETURN average;
END$$

DELIMITER ;

-- USANDO:

SELECT retornaMedia('Real Madrid', 'GK')
	INTO @gkAverage

```