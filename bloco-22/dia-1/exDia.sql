CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE gerentes(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL
);

CREATE TABLE cuidadores(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
gerente_id INT NOT NULL,
FOREIGN KEY (gerente_id) REFERENCES gerentes(id)
);


CREATE TABLE animal(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
especie VARCHAR(100) NOT NULL,
sexo CHAR(1) NOT NULL,
idade INT(2) NOT NULL,
local VARCHAR(50) NOT NULL
);

CREATE TABLE animal_cuidador(
animal_id INT NOT NULL,
cuidador_id INT NOT NULL,
FOREIGN KEY (animal_id) REFERENCES animal(id),
FOREIGN KEY (cuidador_id) REFERENCES cuidadores(id)
);