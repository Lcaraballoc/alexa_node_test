const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('Hola');
});

app.get('/quotes', (request, response) => {
    response.json({ "Hola": "Hola" })
})

app.post('/addquotes', (request, response) => {
    console.log(request.body)
    response.json(request.body)
})

app.listen('3000', () => {
    console.log('Servidor funcionando en http://localhost:3000')
})