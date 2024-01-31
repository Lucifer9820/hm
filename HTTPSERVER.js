var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hey server............................!");
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><body><p style="color:red;">This is student page</p></body></html>'
    );
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><body><h1 style="background:gray; color:red;">This is admin page</h1></body></html>'
    );
    res.end();
  } else if (req.url == "/teacher") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><body><h1 style="background:gray; color:red;">This is teacher page</h1></body></html>'
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Invalid Request");
  }
});

server.listen(8080);
console.log("Server is running...");
