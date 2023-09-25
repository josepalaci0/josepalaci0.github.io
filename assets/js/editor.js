// Obtener el elemento del editor
const editor = ace.edit('editor')

// Configurar el editor
editor.setTheme('ace/theme/monokai') // Tema (puedes cambiarlo)
editor.session.setMode('ace/mode/javascript') // Lenguaje de resaltado de sintaxis (JavaScript en este caso)
editor.setValue(`
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

saludar("Mundo");
`)
editor.gotoLine(1) // Ir a la primera línea

// Opcional: Personalizar más opciones del editor
