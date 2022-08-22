// consola (log, info, warn, error)
console.log("Hola mundo!");
console.info("Esto es importante");
console.warn("Esto es una advertencia");
console.error("Esto es un error");
console.assert(1 === 1);

//== compara valores
console.assert(1 == true);

//=== compara valor y tipo de dato
console.assert(1 === true);

console.assert(1 == "1");


// variables, constantes

//las constantes no se pueden modificar desde el cliente
const precio = 59.99;

//manera antigua de declarar variabes, no se recomienda porque 
//tiene alcance de función
var robot = "Fanuc";

console.log(robot);

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);

//manera nueva de declarar variables, tiene alcance de ámbito {}
let carrera = "ISDR";

console.log(carrera);

for (let j = 0; j < 10; j++) {
    console.log(j);
}

//la siguiente línea marca error porque j murió en el ciclo for
//console.log(j);

console.log(1 + 3 + "4");

console.log("3" + 4 + 1);


// alert, prompt, confirm
alert("hola");

const nombre = prompt("¿Cómo te llamas?");
console.log("hola " + nombre);

const respuesta = confirm("¿Tienes sueño?");
if (respuesta) {
    console.log("necesitas café");
} else {
    console.log("no necesitas café");
}


// funciones tradicionales
function tomar_cafe() {
    console.log("Glu glu glu");
}

tomar_cafe();

function tomar(bebida) {
    console.log("Tomando " + bebida);
}

tomar("té");









// funciones modernas
















// arreglos

//const arreglo = ["Elemento"];
















//arreglo.push("Otro elemento");



//arreglo[10] = "Uno más";


//arreglos asociativos
















//document.write()