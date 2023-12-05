//Comprobando si un valor es un número o no
var mivalor = "10";

if (isNaN(mivalor)) {
  alert(mivalor + " no es un número");
} else {
  var numero = parseInt(mivalor);
  numero = numero * 10;
  alert("El número es: " + numero);
}
