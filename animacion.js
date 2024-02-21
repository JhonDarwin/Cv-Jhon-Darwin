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

// imagen movimiento izquieda
// Arreglo de rutas de imágenes y enlaces
const imagenes = ['img/compu.jpg', 'img/compu2.jpg', 'img/proyecto22.jpg']; // Agrega más imágenes según sea necesario
const enlaces = ['https://docs.google.com/document/d/1HflEVZPx4z4Y82wzIU4f7HpRW0FGW-04/edit?usp=drive_link&ouid=111835458615396456786&rtpof=true&sd=true', 'https://docs.google.com/document/d/1HflEVZPx4z4Y82wzIU4f7HpRW0FGW-04/edit?usp=drive_link&ouid=111835458615396456786&rtpof=true&sd=true', 'https://github.com/JhonDarwin']; // Agrega más enlaces según sea necesario

let index = 0; // Índice actual de la imagen
const imagen = document.querySelector('.centered-image');

// Función para cambiar la imagen automáticamente
function cambiarImagen() {
  index = (index + 1) % imagenes.length; // Avanzar al siguiente índice, ciclando si se llega al final
  imagen.src = imagenes[index]; // Cambiar la fuente de la imagen
  imagen.parentElement.href = enlaces[index]; // Cambiar el enlace del contenedor de la imagen
}

// Cambiar automáticamente la imagen cada 3 segundos
setInterval(cambiarImagen, 3000);

// imprimir y descargar

function descargarCV() {
  // Reemplaza 'ruta-al-cv.pdf' con la ruta de tu archivo CV en formato PDF
  window.open('https://drive.google.com/file/d/1uWVx0TW-dHii-f7AuWWziayOyj_Sa6KF/view?usp=sharing', '_blank');
}

function imprimirCV() {
  window.print();
}


window.addEventListener("scroll", function() {
  var botonesFlotantes = document.querySelector(".botones-flotantes");
  if (window.scrollY > 100) { // Cambia este valor según tu preferencia
    botonesFlotantes.style.opacity = "1";
  } else {
    botonesFlotantes.style.opacity = "0";
  }
});
