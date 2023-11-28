
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as id', connection.threadId);
});


const sqlQuery = 'SELECT * FROM your_table_name';

connection.query(sqlQuery, (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }


  console.log('Query Results:', results);

  
  connection.end((err) => {
    if (err) {
      console.error('Error closing database connection:', err.stack);
      return;
    }
    console.log('Database connection closed.');
  });
});