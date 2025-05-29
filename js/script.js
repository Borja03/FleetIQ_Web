document.addEventListener('DOMContentLoaded', () => {
  // Actualiza el año en el pie de página
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Implementa scroll suave en los enlaces de navegación
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
});
