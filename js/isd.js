let elemento_html = document.getElementById("html");

function descripcion_html() {
    let span = document.getElementById("info_html");
    span.innerHTML = ': Hyper Text Markup Language. Es el lenguaje que utilizan los navegadores web para desplegar las páginas web. Idealmente contienen el contenido y estructura de una página.';
    elemento_html.onclick = ocultar_descripcion_html;
}

function ocultar_descripcion_html() {
    let span = document.getElementById("info_html");
    span.innerHTML = '';
    elemento_html.onclick = descripcion_html;
}

elemento_html.onclick = descripcion_html;

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