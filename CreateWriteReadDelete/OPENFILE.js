var fs = require("fs");

console.log("Going to open a file!");

fs.open("test.txt", "r+", function (err, fd) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File opened successfully!");
});
