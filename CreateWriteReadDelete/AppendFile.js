var fs = require("fs");
fs.appendFile("input.txt", "hiii ", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
