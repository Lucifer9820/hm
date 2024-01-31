var fs = require("fs");
console.log("Going to read a directory. ");
fs.readdir("/Users", function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    console.log(file);
  });
});
