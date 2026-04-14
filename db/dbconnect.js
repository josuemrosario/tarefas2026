//import mysql from 'mysql2/promise';
const mysql  = require('mysql2/promise');

async function main() {
try {
    // Tenta executa o que está aqui dentro
      // create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'HORTETEC_115',
        database: 'tarefas',
    });

    const [results, fields] = await connection.execute(
        'SELECT * FROM tarefas'
      );

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

} catch (err) {
    // executa se o try der erro
    console.log(err);
  }
}

main()