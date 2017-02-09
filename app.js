var express=require ("express");

var app=express();
app.set('view engine','ejs');
app.use(express.static("./public"));
var todoController=require("./controllers/todoController");
todoController(app);
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'newdatabase'
});

connection.connect();

connection.query('SELECT * from new_table', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
app.listen(8000);
console.log("listening at port");
