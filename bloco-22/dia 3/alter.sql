-- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE locations RENAME COLUMN street_address TO address;

ALTER TABLE locations CHANGE address address VARCHAR(255);

-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.

SELECT * FROM regions;
ALTER TABLE regions RENAME COLUMN REGION_NAME TO region;

-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.

SELECT * FROM countries;
ALTER TABLE regions RENAME COLUMN COUNTRY_NAME TO country;

-- Colocar nova coluna depois de certa coluna

ALTER TABLE Betrybe ADD COLUMN estado VARCHAR(255) AFTER id;

-- Colocar nova coluna na primeira posição

ALTER TABLE Betrybe ADD COLUMN estado VARCHAR(255) FIRST;

-- Modificar o tipo de dado da coluna

ALTER TABLE Betrybe MODIFY estado CHAR(2) NOT NULL;

ALTER TABLE Betrybe MODIFY id INT PRIMARY KEY AUTO_INCREMENT;