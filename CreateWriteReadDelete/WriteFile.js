var fs = require("fs");
fs.writeFile("test.txt", "Hello World hi 123!", function (err) {
  if (err) console.log(err);
  else console.log("Write operation complete.");
});
