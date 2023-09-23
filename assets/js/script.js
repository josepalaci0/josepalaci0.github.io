/** @format */

let isTrue = false;
let originalBackgroundColor; // Declarar originalBackgroundColor como variable global

const App = {
   mostrarSeccion: (seccion) => {
      // Ocultar todas las secciones
      const secciones = [
         "acercademi",
         "inicio",
         "servicios",
         "blog",
         "foro",
         "proyectos",
         "documentos",
         "contacto",
      ];
      secciones.forEach((seccionId) => {
         const elemento = document.getElementById(seccionId);
         if (elemento) {
            elemento.style.display = "none";
         }
      });
      // Mostrar la sección seleccionada
      const seccionActual = document.getElementById(seccion);
      if (seccionActual) {
         seccionActual.style.display = "block";
      }
   },
};
