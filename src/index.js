let http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'content-Type': 'text/plain' });
    response.end('Hooola')
}).listen(8000);

console.log('El Servidor esta funcionando en http://localhost:8000/')