var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1qaz2wsx',
  database : 'db1'
});
 
connection.connect();
 
connection.query('SELECT * FROM `user`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();