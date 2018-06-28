CREATE DATABASE burgers_sequelized_db;
USE burgers_sequelized_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY(id)
);