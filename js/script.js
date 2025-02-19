document.addEventListener('DOMContentLoaded', () => {
    // Actualiza el año en el pie de página
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    // Implementa scroll suave en los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  