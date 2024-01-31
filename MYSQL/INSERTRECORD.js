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
  var query = "INSERT INTO INFO (Name, ADDRESS) VALUES ('ABC', 'MUMBAI')";

  con.query(query, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted!");
    con.end();
  });
});
