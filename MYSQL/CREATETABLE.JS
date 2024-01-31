var mysql = require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "982089",
  database: "INFO",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var query = "CREATE TABLE INFO(Name VARCHAR(10), ADDRESS VARCHAR(255))";
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log("Table created!");
  });
});
