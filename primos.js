var n = 1;
var primelist = "";
var limit;

// Recibo el límite de búsqueda y la inicio.
onmessage = function(event){
    limit = event.data;
    buscarPrimos();
  }


function buscarPrimos() {

  search: while (n<limit) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
  // Envío el resultado
  postMessage(primelist);
  // Reinicio las variables para una nueva búsqueda
  primelist = "";
  n=1;
}

