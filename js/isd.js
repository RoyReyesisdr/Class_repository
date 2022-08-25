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