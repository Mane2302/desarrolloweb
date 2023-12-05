//Devolviendo diferentes valores desde una función
var contador = 80;
var items = 20;
function mifuncion(valor1, valor2) {
  var total = valor1 + valor2;
  if (total > 100) {
    return total;
  } else {
    return 0;
  }
}
var resultado = mifuncion(contador, items);
alert(resultado);
