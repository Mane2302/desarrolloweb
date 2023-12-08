//Devolviendo una condición para filtrar los elementos
var lista = [1, 2, 3, 4, 5];
var listanueva = lista.filter(function (valor) {
  return valor <= 3;
});
alert(listanueva);
 