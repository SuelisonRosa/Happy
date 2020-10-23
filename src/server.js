// importart lib
const express = require('express');

// iniciando o express
const server = express();

// criar uma rota
server.get('/', function (request, response){
    return response.send('olá meu chapa')
})

// ligar o servidor 
server.listen(5500)