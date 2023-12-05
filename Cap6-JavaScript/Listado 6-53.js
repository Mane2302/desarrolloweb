//Declarando dos variables con el mismo nombre
var miVariable = 5;
function mifuncion() {
  var miVariable = 'Esta es una variable local';
  alert(miVariable);
}
mifuncion();
alert(miVariable)