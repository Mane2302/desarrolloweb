//Saltando hacia el siguiente ciclo del bucle
var lista = [1, 2, 3, 4, 5];
var total = 0;
for (var f = 0; f < 5; f++) {
  var numero = lista[f];
  if (numero == 3) {
    break;
  }
  total += numero;
}
alert("El total de la suma es: " + total);
