    CREATE DATABASE tarefas
    CHARACTER SET utf8mb4;
    
    USE tarefas;
    
	CREATE TABLE IF NOT EXISTS tarefas(
        id INT AUTO_INCREMENT PRIMARY KEY,
        data DATE,
        hora TIME,
        descricao VARCHAR(200)
      );