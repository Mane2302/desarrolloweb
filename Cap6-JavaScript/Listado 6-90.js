//Removiendo espacios
var texto = "Hola mundo";
var mensaje = "";
for (var f = 0; f < texto.length; f++) {
  mensaje += texto[f] + " ";
}
mensaje = mensaje.trim();
alert(mensaje);
