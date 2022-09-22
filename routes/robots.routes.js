const express = require('express');
const path = require('path');

const router = express.Router();

const robots = [];

router.get('/new', (request, response, next) => {
    response.render(path.join('robots','new.ejs')); 
});

router.post('/new', (request, response, next) => {
    console.log(request.body);
    robots.push(request.body.nombre);
    response.redirect('/robots');
});

router.get('/git', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'previous',  'frontend', 'git.html'));
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