document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById('root');
    const changeColorButton = document.getElementById('changeColorButton');
    const colorPalette = document.getElementById('colorPalette');
    
    let isColorPaletteVisible = false; // Variable de estado para controlar la visibilidad de la paleta de colores

    // Definir los colores para la paleta
    const colors = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF"
    ];

    // Función para cambiar el color del fondo
    function changeBackgroundColor(color) {
        root.style.backgroundColor = color;
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

    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');

    const radius = 30; // Radio del círculo
    let circleX = canvas.width / 2; // Posición X del círculo
    let circleY = canvas.height / 2; // Posición Y del círculo

    // Función para dibujar el círculo con sombreado 3D
    function drawCircle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

        // Crear gradiente radial para el sombreado
        const gradient = ctx.createRadialGradient(
            circleX - 10, circleY - 10, 0, circleX, circleY, radius + 10
        );
        gradient.addColorStop(0, 'white'); // Color interior
        gradient.addColorStop(1, 'blue');  // Color exterior

        // Dibujar el círculo con el gradiente
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
    }

    // Actualizar la posición del círculo con el mouse
    canvas.addEventListener('mousemove', function (event) {
        circleX = event.clientX - canvas.getBoundingClientRect().left;
        circleY = event.clientY - canvas.getBoundingClientRect().top;
        drawCircle(); // Volver a dibujar el círculo con la nueva posición
    });

    // Inicializar el círculo
    drawCircle();
});
