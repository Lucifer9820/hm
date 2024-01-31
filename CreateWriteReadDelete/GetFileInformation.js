var fs = require("fs");
console.log("Going to get fileinfo!");
fs.stat("test.txt", "r+", function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");
  console.log("Is it a file?", +stats.isFile());
  console.log("Is it a directory?", +stats.isDirectory());
});
