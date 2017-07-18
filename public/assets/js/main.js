var api = {
	url: "http://localhost:3000/api/registerNumber"
}

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
		ajax.open("POST", url);
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4) {
				resolve(JSON.parse(ajax.responseText));
			}
		}
	})
}

pedirInfo(api.url)
.then(function(respuestaDatos){console.log(respuestaDatos)}); 


	



/*carousel*/
$('.carousel.carousel-slider').carousel({fullWidth: true});
