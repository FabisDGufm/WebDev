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

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    // Toggle clase del body
    body.classList.toggle('modo-oscuro');
    
    // Cambiar imagen del botón
    if (body.classList.contains('modo-oscuro')) {
        themeIcon.src = 'images/lunaCV.png';  // Imagen de luna con estrellas
        themeIcon.alt = 'Cambiar a modo día';
        
        // Ajustar opacidad de las secciones para mejor legibilidad
        document.querySelectorAll('section, article').forEach(el => {
            el.style.background = 'rgba(255, 255, 255, 0.85)';
        });
    } else {
        themeIcon.src = 'images/solCV.png';  // Imagen del sol
        themeIcon.alt = 'Cambiar a modo noche';
        
        // Restaurar opacidad original
        document.querySelectorAll('#about').forEach(el => {
            el.style.background = 'rgba(255, 255, 255, 0.65)';
        });
        document.querySelectorAll('#educacion, #experiencia, main section:nth-of-type(4), main section:nth-of-type(5)').forEach(el => {
            el.style.background = 'rgba(255, 255, 255, 0.70)';
        });
        document.querySelectorAll('main article').forEach(el => {
            el.style.background = 'rgba(255, 255, 255, 0.75)';
        });
    }
    
    localStorage.setItem('theme', body.classList.contains('modo-oscuro') ? 'dark' : 'light');
}

document.addEventListener("DOMContentLoaded", function() {
    actualizarSaludo();

    setInterval(actualizarSaludo, 60000);

    const botonExperiencia = document.getElementById('btn-experiencia');
    if (botonExperiencia) {
        botonExperiencia.addEventListener('click', toggleExperiencia);
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }
    
    const themeButton = document.getElementById('toggle-theme');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
});

