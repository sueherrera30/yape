 $(document).ready(function () {
 	/*carousel*/
 	$('.carousel.carousel-slider').carousel({
 		fullWidth: true
 	});
	 activarBoton();
	 
 });

 /*validacion de datos*/
 var numeroIngresado = $('#icon_telephone').val();
 var botonContinuar = $('#btn-continuar');
 var palomita = $('#palomita');

palomita.addEventListener("click",activarBoton);

function activarBoton(){
	$botonContinuar.attr("disabled", true);
};


 var url = "http://localhost:3000/api/registerNumber";

var obtenerInformacion = function(){
	$.post(url,{phone:0123456789,terms:true},function(datosObtenidos){
		console.log(datosObtenidos);
	})
};
obtenerInformacion();
	




