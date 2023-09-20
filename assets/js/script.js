let isTrue = false;
let originalBackgroundColor; // Declarar originalBackgroundColor como variable global

const App = {
    mostrarSeccion: (seccion) => {
        // Ocultar todas las secciones
        const secciones = ['acercademi', 'inicio', 'servicios', 'blog', 'foro', 'proyectos','documentos', 'contacto'];
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








