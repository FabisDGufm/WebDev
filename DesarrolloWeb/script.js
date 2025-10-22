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

    return saludo;
}

function actualizarSaludo() {
    const elementoSaludo = document.getElementById("saludo-dinamico");

    if (elementoSaludo) {
        elementoSaludo.textContent = obtenerSaludo();
    }
}

function toggleExperiencia() {
    const seccionExperiencia = document.getElementById('experiencia');
    const boton = document.getElementById('btn-experiencia');
    
    if (seccionExperiencia.style.display === 'none') {
        seccionExperiencia.style.display = 'block';
        boton.textContent = 'Ocultar Experiencia Laboral';
    } else {
        seccionExperiencia.style.display = 'none';
        boton.textContent = 'Mostrar Experiencia Laboral';
    }
}

function toggleExperiencia() {
    const contenidoExperiencia = document.getElementById('experiencia-content');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    
    contenidoExperiencia.classList.toggle('oculto');
    
    if (contenidoExperiencia.classList.contains('oculto')) {
        btnText.textContent = 'Mostrar';
        btnIcon.textContent = '▶';
    } else {
        btnText.textContent = 'Ocultar';
        btnIcon.textContent = '▼';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    actualizarSaludo();

    setInterval(actualizarSaludo, 60000);

    const botonExperiencia = document.getElementById('btn-experiencia');
    if (botonExperiencia) {
        botonExperiencia.addEventListener('click', toggleExperiencia);
    }
});

