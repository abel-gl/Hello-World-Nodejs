var http = require('http');

var server = http.createServer(function (req,res) {
	res.writeHead('200',{'content-type':'text/plain'});
	res.end('Hello World');
}).listen(9000);

// ir a la terminal y ejecutar este archivo con la siguinete linea de comandos /node server.js

// ir al navegador y ejecutar la siguiente liga http://localhost:9000/