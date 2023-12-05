//Devolviendo valores desde funciones usando return
var contador = 200;
var items = 20;
function mifuncion(valor1, valor2) {
  var total = valor1 + valor2;
  return total;
}
var resultado = mifuncion(contador, items);
alert(resultado);