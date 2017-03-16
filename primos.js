var n = 1;
var primelist = "";
var limit;

// Recibo el límite de búsqueda y la inicio.
onmessage = function(event){
    limit = event.data;
    buscarPrimos();
  }


function buscarPrimos() {
  // Reinicio las variables para una nueva búsqueda
  primelist = "";
  n=1;
  var counter = 0;
  var len = 200;

  search: while (n<limit) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
    counter += 1;
    if (counter == len){
       // Envío el resultado
      postMessage(primelist);
      console.log("Worker: Enviando sublista de longitud " + len);
      primelist = "";
      counter = 0;
    }
  }
  if (n == limit){
      postMessage(primelist);
      postMessage("0");
    }

}

/* TODO: cuando ponemos un límite alto se queda un buen rato calculando. Hay que
  buscar un tamaño de datos para ir concatenando al resultado obtenido en la iteración
  previa y enviar una marca cuado terminemos para cerrar el worker, cosa que no
  estás haciendo.*/
