
CREATE DATABASE IF NOT EXISTS Auth;

USE Auth;
CREATE TABLE Users
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255)
  
);