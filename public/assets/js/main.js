/*funcionalidad de carousel*/
$(document).ready(function () {

	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
    imprimirNumero();
});
/*--------------------------------------------------*/
/*validacion de datos*/
var numeroIngresado = $('#entrada');
var botonContinuar = $('#btn-continuar');
var palomita = $('#test5');
var telefonoObtenido;
var terminos;

numeroIngresado.keyup(validarNumero);
palomita.change(validarNumero);

function validarNumero() {
	var longitud = numeroIngresado.val().length;
	
	if (longitud == 10 && palomita.is(":checked")) {
		terminos = true;
		telefonoObtenido = numeroIngresado.val();
		botonContinuar.removeClass("disabled");
};
}
/*-----------------------------------------------------*/
/*api*/
/*primera peticion*/
var miApi = {
	urlRegistro: "http://localhost:3000/api/registerNumber",
	urlCodigo: "http://localhost:3000/api/resendCode"
}

function obtenerInformacion() {
	$.post(miApi.urlRegistro, {
		phone: telefonoObtenido,
		terms: terminos,
	}).then(function (respuesta) {
		 console.log(respuesta.data.code)
		 almacenarInformacion(respuesta)
		 tiempo();
	}).catch(function (error) {
		console.log(respuesta)
	})
};

function almacenarInformacion(respuesta){
	localStorage.setItem("phone",telefonoObtenido);
	localStorage.setItem("terms",terminos);
	localStorage.setItem("code",respuesta.data.code);
	mostrarCodigo(respuesta);
	validarCodigo(respuesta);
}

/*function obtenerInformacion(){
	var telefonoLS = localStorage.getItem("phone");
    console.log(telefonoLS);
	var terminosLS = localStorage.getItem("terms");
	console.log(terminosLS);
	var codigoLS = localStorage.getItem("code");
	console.log(codigoLS);
	mostrarCodigo(respuesta);	
}*/

function mostrarCodigo(respuesta){
	var codigoLS = localStorage.getItem("code");
	console.log(codigoLS);
	alert("Tu código es: " + codigoLS);
};


function imprimirNumero(){
	var almacenTelImpreso = $("#telefono-impreso");
	var telefonoLS = localStorage.getItem("phone");
	almacenTelImpreso.html(telefonoLS);
}

botonContinuar.click(obtenerInformacion);

function tiempo(){
	setTimeout(function(){
		$.post(miApi.urlCodigo,{
		    phone: localStorage.phone
		},function(respuesta){
				console.log(respuesta.data);
			    
			    mandarNuevoCodigo(respuesta);
				})
	
}, 3000);
}

/*
----------------------------------- validación de codigo
*/
var inputEscribeCodigo = $("#entrada");
inputEscribeCodigo.keypress(validarCodigo);

function validarCodigo() {
	 var codigoLS = localStorage.getItem("code");
	 var valorCodigoIngresado = numeroIngresado.val();
	
	 if(valorCodigoIngresado == codigoLS){
	    location.href = "formulario.html";
	 }
		
		
}




/*function nuevoCodigo(){
	obtenerInformacion(respuesta);
    localStorage.setItem("newCode",respuesta.data.code);
    mandarNuevoCodigo(respuesta);
}*/

function mandarNuevoCodigo(respuesta){
	localStorage.code = respuesta.data;
	alert("Tu código es: " + localStorage.code);
}





