const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const robots = [];

app.get('/robots/new', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Registrar robot</h1>";
    html += '<form action="/robots/new" method="POST">';
    html += '<label for="nombre">Nombre del robot: </label>';
    html += '<input type="text" id="nombre" name="nombre">';
    html += "<br><br>";
    html += '<input type="submit" id="enviar" name="enviar" value="Registrar">';
    html += "</form>";
    response.send(html); 
});

app.post('/robots/new', (request, response, next) => {
    console.log(request.body);
    robots.push(request.body.nombre);
    response.redirect('/robots');
});

app.use('/robots', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Estos son los mejores robots</h1>";
    html += "<ul>";
    for (let r of robots) {
        html += "<li>" + r +"</li>";
    }
    html += "</ul>";
    response.send(html); 
});

app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404</h1>'); //Manda la respuesta
});

app.listen(3000);