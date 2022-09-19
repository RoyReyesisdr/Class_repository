let descuento = document.getElementById("descuento");
descuento.onclick = () => {
    let porcentaje_descuento = document.getElementById("porcentaje_descuento").value;
    let contenedor_precio_cafe = document.getElementById("precio_cafe");
    let contenedor_precio_cerveza = document.getElementById("precio_cerveza");

    let precio_cafe = Number(contenedor_precio_cafe.innerText);
    precio_cafe = precio_cafe - precio_cafe * porcentaje_descuento / 100;
    contenedor_precio_cafe.innerText = precio_cafe;

    let precio_cerveza = Number(contenedor_precio_cerveza.innerText);
    precio_cerveza = precio_cerveza - precio_cerveza * porcentaje_descuento / 100;
    contenedor_precio_cerveza.innerText = precio_cerveza;

    document.getElementById("promocion").innerHTML = "¡Se aplicó el descuento, disfruta tus bebidas!";
}

let porcentaje_descuento = document.getElementById("porcentaje_descuento");
porcentaje_descuento.onkeyup = () => {
    if (porcentaje_descuento.value > 20) {
        document.getElementById("promocion").innerHTML = "Querías hacer trampa... ¡Perdiste tu descuento!";
    }
}

let label_cafe = document.getElementById("label_cafe");
label_cafe.onmouseover = () => {
    document.getElementById("imagen_cafe").innerHTML = '<img src="https://as01.epimg.net/deporteyvida/imagenes/2018/06/19/portada/1529402043_039778_1529402207_noticia_normal_recorte1.jpg" alt="Imagen de café" width="400">';
}

label_cafe.onmouseleave = () => {
    document.getElementById("imagen_cafe").innerHTML = '';
}

let label_cerveza = document.getElementById("label_cerveza");
label_cerveza.onmouseover = () => {
    document.getElementById("imagen_cerveza").innerHTML = '<img src="https://pbs.twimg.com/profile_images/1526257909033709570/99dbdXRh_400x400.jpg" alt="Imagen de cerveza" width="400">';
}

label_cerveza.onmouseleave = () => {
    document.getElementById("imagen_cerveza").innerHTML = '';
}