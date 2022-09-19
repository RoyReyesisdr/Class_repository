const express = require('express');

const router = express.Router();

const robots = [];

router.get('/new', (request, response, next) => {
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

router.post('/new', (request, response, next) => {
    console.log(request.body);
    robots.push(request.body.nombre);
    response.redirect('/robots');
});

router.get('/', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Estos son los mejores robots</h1>";
    html += "<ul>";
    for (let r of robots) {
        html += "<li>" + r +"</li>";
    }
    html += "</ul>";
    response.send(html); 
});

module.exports = router;