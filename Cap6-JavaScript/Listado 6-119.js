//Eliminando valores de un array
var lista = [12, 5, 80, 34, 5, 6, 7];
var listanueva = lista.sort(function (valor1, valor2) {
  return valor1 > valor2;
});
alert(listanueva);
