var detallesMachuPicchu = document.getElementById("detallesMachuPicchu");
var detallesBaires = document.getElementById("detallesBaires");
var detallesRio = document.getElementById("detallesRio");

$(document).ready(function() {
    $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr('id');
      detallesMachuPicchu.classList.remove("ocultar");
      detallesBaires.classList.remove("ocultar");
      detallesRio.classList.remove("ocultar");
      $("#detalles" + idBoton).toggle();
    });


    $(".btn-close").click(function() {
      detallesMachuPicchu.classList.add("ocultar");
      detallesBaires.classList.add("ocultar");
      detallesRio.classList.add("ocultar");
      //$(".detalles").show();
    });
  });