var http = require("http");

var manejador = function(request, response) {
  console.log("Home mundo!!");
  response.end("==> bla bla bla response");
};

var server = http.createServer(manejador);
server.listen(8090);