const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'course_test3'
});

connection.connect();

const operation = process.argv[2];
const id = process.argv[3];
const val1 = process.argv[3];
const val2 = process.argv[4];

if (operation === 'select') {
  connection.query('select * from products where id = ?', [id], function(err, result) {
    console.log(result);
  });
}

if (operation === 'values') {
  connection.query('select * from products where value >= ? and value <= ?', [val1, val2], function (err, result) {
    console.log(result);
  });
}

if (operation === 'delete') {
  connection.query('delete from products where id = ?', [id], function (err, result) {
    console.log(result);
  });
}


connection.end();
