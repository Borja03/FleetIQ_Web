// Actualizar el año en el footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `© ${currentYear} - Todos los derechos reservados`;
    
    // Efecto suave al hacer hover en los enlaces de navegación
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Animación para el encabezado principal
    const h1 = document.querySelector('h1');
    h1.style.opacity = '0';
    h1.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        h1.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        h1.style.opacity = '1';
        h1.style.transform = 'translateY(0)';
    }, 100);
});