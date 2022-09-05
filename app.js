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

const robots = ["Atlas", "R2D2", "C3PO", "Wally", "Eva"];

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    if (request.url == "/robots") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Estos son los mejores robots</h1>");
        response.write("<ul>");
        for (let i of robots) {
            response.write("<li>" + i +"</li>");
        }
        response.write("</ul>");
        response.end();
    } else if (request.url == "/robots/new" && request.method == "GET") { 
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Registrar robot</h1>");
        response.write('<form action="/robots/new" method="POST">');
        response.write('<label for="nombre">Nombre del robot: </label>');
        response.write('<input type="text" id="nombre" name="nombre">');
        response.write("<br>");
        response.write("<br>");
        response.write('<input type="submit" id="enviar" name="enviar" value="Registrar">');
        response.write("</form>");
        response.end();
    } else if (request.url == "/robots/new" && request.method == "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_robot = datos_completos.split('&')[0].split('=')[1];
            robots.push(nuevo_robot);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write("<h1>El nuevo robot fue registrado.</h1>");
            response.end();
        });
    } else if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Hola mundo!</h1>");
        response.end();
    } else {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Error 404: El recurso solicitado no existe</h1>");
        response.end();
    }
    
});

server.listen(3000);