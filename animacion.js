window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  document.getElementById('parallaxImage').style.transform = 'translateY(-' + scrollPosition * 0.5 + 'px)';
});


document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar todas las barras de animación
  const barrasAnimacion = document.querySelectorAll('.barra-animacion');

  // Iterar sobre cada barra de animación
  barrasAnimacion.forEach(barra => {
    // Obtener el porcentaje de la barra
    const porcentaje = barra.dataset.porcentaje;

    // Ajustar el porcentaje como variable CSS
    barra.style.setProperty('--porcentaje', `${porcentaje}%`);
  });
});
