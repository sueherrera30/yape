/*funcionalidad de carousel*/
$(document).ready(function () {

	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
});


/*--------------------------------------------------*/

/*validacion de datos*/
var numeroIngresado = $('#entrada');
var botonContinuar = $('#btn-continuar');
var palomita = $('#test5');
var telefonoObtenido = 0;
var terminos = 0;

console.log(numeroIngresado)
console.log(botonContinuar);
console.log(palomita);

numeroIngresado.keyup(validarNumero);
palomita.change(validarNumero);

function validarNumero(e) {
	e.preventDefault();
	var longitud = numeroIngresado.val().length;
	
	if (longitud == 10 && palomita.is(":checked")) {
		/*terminos = true;*/
		botonContinuar.removeClass("disabled");
		/*(":checked")   aun no se por que necesita los dos puntos :s :es como un selector o seudoclase*/
	}
	else{
		terminos = false;
		return terminos;
	}
};
/*-----------------------------------------------------*/
/*api*/
/*primera peticion*/
var miApi = {
	urlRegistro: "http://localhost:3000/api/registerNumber",
	urlCodigo: "http://localhost:3000/api//resendCode"
}

function obtenerInformacion() {
	$.post(miApi.urlRegistro, {
		phone: numeroIngresado.val(),
		terms: terminos
	}).then(function (respuesta) {
		console.log(respuesta)
	}).catch(function (error) {
		console.log(respuesta)
	})
};

botonContinuar.click(obtenerInformacion);




 /*function obtenerCodigo(){
	 $.post(miApi.urlCodigo,
			{userId:numeroIngresado.val()}).then(function (respuesta) {
		console.log(respuesta)
	}).catch(function (error) {
		console.log(respuesta)})
 };
obtenerCodigo();

*/






