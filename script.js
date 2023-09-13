document.addEventListener("DOMContentLoaded", function() {
    // Agregar desplazamiento suave al hacer clic en enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
