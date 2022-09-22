const express = require('express');
const path = require('path');

const router = express.Router();

const robots = ["R2D2", "C3PO"];

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
    response.render(path.join('robots','list.ejs'), {
        robots: robots,
        code_injection: '<script>alert("jojojo te hackié")</script>',
    }); 
});

module.exports = router;