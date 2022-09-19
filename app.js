const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasRobots = require('./routes/robots.routes');

app.use('/robots', rutasRobots);

app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404</h1>'); //Manda la respuesta
});

app.listen(3000);