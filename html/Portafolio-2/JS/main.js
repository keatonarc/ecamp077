document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//function descargarCv(){
//  const link = document.createElement('a');
//  link.href = 'http://127.0.0.1:5500/html/Portafolio-2/pdf/ejemplo.pdf'; // Reemplaza esto con la ruta a tu archivo PDF
//  link.download = 'CV_Matias_Aguilera.pdf'; // Reemplaza esto con el nombre que desees para el archivo descargado
//  link.click();
//};

function descargarCv(){
  //const url = window.location.href;
  const port = window.location.port;
  console.log('url : ',port);
  const link = document.createElement('a');
  link.href = 'http://127.0.0.1:'+port+'/html/Portafolio-2/pdf/ejemplo.pdf'; // Reemplaza esto con la ruta a tu archivo PDF
  link.download = 'CV_Matias_Aguilera.pdf'; // Reemplaza esto con el nombre que desees para el archivo descargado
  link.click();
}