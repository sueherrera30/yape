var url= "http://localhost:3000/registerNumber";


/* VERSION UNO :()
function obtenerInfo() {
	$.getJSON(url,function(numero){		
		numero.forEach(verNumeros);
	});
}

function verNumeros(numeros){
	console.log(numeros)
}
*/

/*VERSION DOS CON XMLHTTPrequest y promise*/
function pedirInfo(url) {
	return new Promise(function (resolve, reject) {
		var ajax = new XMLHttpRequest();
		ajax.open("GET", url);
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4) {
				resolve(JSON.parse(ajax.responseText));
			}
		}
	})
}

/*pedirInfo(aqui va mi json no se que aqui )
.then.... */


	



/*carousel*/
$('.carousel.carousel-slider').carousel({fullWidth: true});
