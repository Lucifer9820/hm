var fs = require("fs");
fs.appendFile("test.txt", "how are you!!!! ", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
