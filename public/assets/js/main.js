/*funcionalidad de carousel*/
$(document).ready(function () {

	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
	imprimirNumero();
	if (location.href == "http://localhost:3000/codigo.html") {
		tiempo();
	}

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

botonContinuar.click(cambioPaginaCodigo);
/*-----------------------------------------------------*/
/*api*/
/*primera peticion*/
var miApi = {
	urlRegistro: "http://localhost:3000/api/registerNumber",
	urlCodigo: "http://localhost:3000/api/resendCode",
	urlUsuario: "http://localhost:3000/api/createUser",
}

function obtenerInformacion() {
	$.post(miApi.urlRegistro, {
		phone: telefonoObtenido,
		terms: terminos,
	}).then(function (respuesta) {
		console.log(respuesta.data.code)
		almacenarInformacion(respuesta)
		datosFormulario(respuesta)
	}).catch(function (error) {
		console.log(respuesta)
	})
};

function almacenarInformacion(respuesta) {
	localStorage.setItem("phone", telefonoObtenido);
	localStorage.setItem("terms", terminos);
	localStorage.setItem("code", respuesta.data.code);
	mostrarCodigo(respuesta);
	validarCodigo(respuesta);
}

function mostrarCodigo(respuesta) {
	var codigoLS = localStorage.getItem("code");
	console.log(codigoLS);
	alert("Tu código es: " + codigoLS);
};


function imprimirNumero() {
	var almacenTelImpreso = $("#telefono-impreso");
	var telefonoLS = localStorage.getItem("phone");
	almacenTelImpreso.html(telefonoLS);

}



/*-------------------------------------------------*/
function tiempo() {
	setInterval(function () {
		$.post(miApi.urlCodigo, {
			phone: localStorage.phone
		}, function (respuesta) {
			console.log(respuesta.data);
			mandarNuevoCodigo(respuesta);
		})
	}, 21000);
}

/*
----------------------------------- validación de codigo
*/
var inputEscribeCodigo = $("#entrada");
inputEscribeCodigo.keypress(validarCodigo);

function validarCodigo() {
	var valorCodigoIngresado = numeroIngresado.val();

	if (valorCodigoIngresado == localStorage.code) {
		clearInterval(tiempo);
		location.href = "formulario.html";
	}


}

function mandarNuevoCodigo(respuesta) {
	localStorage.code = respuesta.data;
	alert("Tu código es: " + localStorage.code);
}

function cambioPaginaCodigo() {
	obtenerInformacion();
	location.href = "codigo.html";

}


/*-------------------------------------sección de formulario*/
var nombreInput = $("#nombre");
var emailInput = $("#email");
var claveInput = $("#clave");
var botonFormulario = $("#btn-formulario");

function datosFormulario() {
	$.post("http://localhost:3000/api/createUser", {
		phone: localStorage.phone,
		name: nombreInput.val(),
		email: emailInput.val(),
		password: claveInput.val()
	}, function (respuesta) {
		console.log(respuesta);
		alert("se muestra objeto en consola")
		if(respuesta.success == true) {
			location.href = "amarilla.html"
		}
		/*guardaDatosForm(respuesta);*/
	});
}

/*probando*/
/*function guardaDatosForm(respuesta){
	localStorage.setItem("nombre", data.name);
	localStorage.setItem("email", data.email);
	localStorage.setItem("contrasena", data.password);
	
}
function validarBotonForm(respuesta){
	var nombreLS=  localStorage.getItem("nombre");
	var emailLS= localStorage.getItem("email");
	var passwordLS= localStorage.getItem("contrasena");
	console.log(nombreLS);
	console.log(emailLS);
	console.log(passwordLS);
	
	if(nombreInput.val() !== "" && emailInput.val()!== ""  && clave.val() !== ""){   
     botonFormulario.removeClass('disabled');}
}*/



botonFormulario.click(datosFormulario);

/*-----------------------------------*/

	if(location.href == "http://localhost:3000/amarilla.html"){
		cambioPaginaTarjeta();
	}

  function cambioPaginaTarjeta (){
		setTimeout(function(){location.href = "http://localhost:3000/tarjeta.html"},1000)
		}

/*----------------------------------*/

	