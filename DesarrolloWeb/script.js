function obtenerSaludo() {
    const fecha = new Date();
    const hora = fecha.getHours();

    let saludo;

    if (5 <= hora < 12) {
        saludo = "buenos días";
    } else if (12 <= hora < 18) {
        saludo = "buenas tardes";
    } else {
        saludo = "buenas noches";
    }

    return saludo
}

function actualizarSaludo() {
    const elementoSaludo = document.getElementById("saludo-dinamico");

    if (elementoSaludo) {
        elementoSaludo.textContent = obtenerSaludo();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    actualizarSaludo();

    setInterval(actualizarSaludo, 60000);
});

