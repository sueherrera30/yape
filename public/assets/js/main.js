/*funcionalidad de carousel*/
$(document).ready(function () {

	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
});
/*--------------------------------------------------*/

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
palomita.change(validarNumero);	

function validarNumero(e) {
	e.preventDefault();
	var longitud = numeroIngresado.val().length;
	if (longitud >= 10 && palomita.is(":checked")){
		botonContinuar.removeClass("disabled");
	}

	/*POSIBLE VALIDACIÓN JUNTO CON PALOMITA
	UNO:  if(longitud >= 10 && palomita.attr("checked")=="checked")????  
	
	DOS:  if (longitud >= 10 && palomita.is(":checked")   aun no se por que necesita los dos puntos :s*/
};
/*-----------------------------------------------------*/
/*api*/
var url = "http://localhost:3000/api/registerNumber";
    var valorNumIngresado = numeroIngresado.val();
    /*localStorage.setItem("phone",valorNumIngresado);*/
function obtenerInformacion () {
	$.post(url, {
		/*phone:localStorage.getItem("phone"),*/
		phone:0987654321,
		terms: true
	}).then(function(respuesta){console.log(respuesta)}).catch(function(respuesta){console.log(respuesta)})
};

botonContinuar.click(obtenerInformacion);  


