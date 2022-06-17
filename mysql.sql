CREATE TABLE usuarios(
nome varchar(50),
email varchar(100),
idade int
);

INSERT INTO usuarios(nome,email,idade)  VALUES("Julio","julio@email.com",23);


SELECT * FROM usuarios;

DELETE FROM usuarios WHERE nome = "Julio";

UPDATE usuarios SET nome = "nome de teste" WHERE nome = "Julio";