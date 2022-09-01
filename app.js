setTimeout(() => {
    console.log("ERROR: SYSTEM FAILURE");
}, 20000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');


console.log("hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    console.log(item);
} 

for (let item in arreglo) {
    console.log(item);
} 

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 


const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write("<h1>Hola mundo!</h1>");
    response.end();
});

server.listen(3000);