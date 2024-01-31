var fs = require("fs");
fs.unlink("input.txt", function () {
  console.log("File Deleted!");
});
