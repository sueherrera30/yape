 $(document).ready(function () {
 	/*carousel*/
 	$('.carousel.carousel-slider').carousel({
 		fullWidth: true
 	});
	 
 });

 /*validacion de datos*/
 var numeroIngresado = $('#entrada');
 var formulario = $("#formulario");
 var botonContinuar = $('#btn-continuar');
 var palomita = $('#test5');

console.log(numeroIngresado) 
console.log(formulario);
console.log(botonContinuar);
console.log(palomita);

numeroIngresado.keyup(validarNumero);

function validarNumero(e){
	e.preventDefault();
	var longitud = numeroIngresado.val().length;
	if(longitud >= 10){
		/*alert("hola");*/
	botonContinuar.removeClass("disabled");
	}
};














 var url = "http://localhost:3000/api/registerNumber";

var obtenerInformacion = function(){
	$.post(url,{phone:0123456789,terms:true},function(datosObtenidos){
		console.log(datosObtenidos);
	})
};
obtenerInformacion();
	




