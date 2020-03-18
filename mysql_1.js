//  npm install --save mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'course_test3'
});

connection.connect();

connection.query('select 1 + 1 as solution', function(error, result) {
  if (error) {
    console.log(error.message);
  } else {
    console.log('Result is', result);
  }
});

const name = 'Paco';
const status = 2;

/*  connection.query(`insert into users (name, status) values (?, ?)`, [name, status], function (err, result) {
  console.log(result);
}); */

/*  connection.query('update users set name = "Mary", status = 1 where id = 3', function(err, result) {
  console.log(result);
}); */


connection.query('select * from users', function(err, result) {
  console.log(result);
});

/*  connection.query('delete from users where id = 3', function (err, result) {
  console.log(result);
}); */



connection.end();
