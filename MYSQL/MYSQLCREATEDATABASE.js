var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "982089",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Conected!");

  con.query("CREATE DATABASE INFO", function (err, result) {
    if (err) throw err;
    console.log("Database created successfully!");
  });
});
