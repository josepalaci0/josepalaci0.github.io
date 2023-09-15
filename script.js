let isTrue = false;
let originalBackgroundColor; // Declarar originalBackgroundColor como variable global

document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');
    const changeColorButton = document.getElementById('changeColorButton');
    const colorPalette = document.getElementById('colorPalette');

    let isColorPaletteVisible = false; // Variable de estado para controlar la visibilidad de la paleta de colores

    // Definir los colores para la paleta
    const colors = [
        "#FFFFFF",
        "#000000",
    ];



    function invertColor(hexColor) {
        // Convierte el color hexadecimal en RGB
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        // Invierte el color restando los componentes RGB de 255
        const invertedR = 255 - r;
        const invertedG = 255 - g;
        const invertedB = 255 - b;

        // Convierte los componentes RGB invertidos en un color hexadecimal
        const invertedColor = `#${(1 << 24 | invertedR << 16 | invertedG << 8 | invertedB).toString(16).slice(1)}`;

        return invertedColor;
    }



    function changeBackgroundColor(color) {
        app.style.backgroundColor = color;
        const textColor = invertColor(color);
        app.style.color = textColor;
    }

    // Función para mostrar la paleta de colores
    function showColorPalette() {
        colorPalette.innerHTML = ''; // Limpiar paleta anterior si existe
        for (const color of colors) {
            const colorOption = document.createElement('div');
            colorOption.className = 'colorOption';
            colorOption.style.backgroundColor = color;
            colorOption.addEventListener('click', function () {
                changeBackgroundColor(color);
                hideColorPalette();
            });
            colorPalette.appendChild(colorOption);
        }
        colorPalette.style.display = 'block';
        isColorPaletteVisible = true;
    }

    // Función para ocultar la paleta de colores
    function hideColorPalette() {
        colorPalette.style.display = 'none';
        isColorPaletteVisible = false;
    }

    // Función para alternar la visibilidad de la paleta de colores
    function toggleColorPalette() {
        if (isColorPaletteVisible) {
            hideColorPalette();
        } else {
            showColorPalette();
        }
    }

    // Agregar clic para el botón de cambio de color
    changeColorButton.addEventListener('click', function () {
        toggleColorPalette();
    });

});

const left = document.getElementById('left');
const right = document.getElementById('right');

function toggleAppStyles() {
    const appElement = document.getElementById('app');

    isTrue = !isTrue;
    left.style.display = isTrue ? 'none' : '';
    right.style.display = !isTrue ? 'none' : '';

    if (isTrue) {
        appElement.style.width = '97.5%';
        appElement.style.transform = 'translate(2.5em)';
    } else {
        appElement.style.backgroundColor = originalBackgroundColor; // Restaurar el color de fondo original
        appElement.style.width = '100%';
        appElement.style.transform = 'translate(0%)';
    }
}

const App = {
    mostrarSeccion: (seccion) => {
        // Ocultar todas las secciones
        const secciones = ['acercademi', 'inicio', 'servicios', 'blog', 'foro', 'proyectos', 'contacto'];
        secciones.forEach((seccionId) => {
            const elemento = document.getElementById(seccionId);
            if (elemento) {
                elemento.style.display = 'none';
            }
        });
        // Mostrar la sección seleccionada
        const seccionActual = document.getElementById(seccion);
        if (seccionActual) {
            seccionActual.style.display = 'block'; // Puedes usar 'inline' si lo prefieres
        }
    },
    manejarmensaje: (tipo) => {
        // Obtenemos el elemento <input>
        const inputElement = document.querySelector('input[type="text"]');
        
        // Obtenemos el valor del input
        const mensaje = inputElement.value;
    
        // Construimos el mensaje basado en el tipo (Frontend, Backend, Full Stack)
        const mensajeCompleto = `${mensaje}`;
        
        // Obtenemos el elemento <code>
        const codeElement = document.querySelector('code.hljs');
    
        // Modificamos el contenido del elemento <code> con el mensaje
        codeElement.textContent = `
    const fn = (mensaje) => {
      console.log('${mensajeCompleto}', 'estoy Programando en ${tipo}');
    }
        `.trim();
    
        // Volvemos a resaltar la sintaxis
        hljs.highlightAll();
      }
};








