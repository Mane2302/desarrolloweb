//Removiendo espacios
var texto = "Hola mundo";
var mensaje = "";
var anterior = "";

for (f = 0; f < texto.length; f++) {
  if (mensaje != "") {
    anterior=texto[f-1];
    if (anterior!= " " && texto[f] != " ") {
      mensaje += "_";

    }
  }
  mensaje += texto[f];
}
alert(mensaje);
