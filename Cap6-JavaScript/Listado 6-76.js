//Usando constructores para crear múltiples objetos
var constructor = function (nombreinicial) {
  var objeto = {
    nombre: nombreinicial,
    edad: 22,
    mostrarnombre: function() {
      alert(this.nombre);
    },
    cambiarnombre: function (nombreNuevo) {
      this.nombre = nombreNuevo;

    }
  };
  return objeto
}
var empleado1 = constructor("Emmanuel");
var empleado2 = constructor("Jorge");
var empleado3 = constructor("José");
alert(empleado1.nombre + ", " + empleado2.nombre + ", " + empleado3.nombre)
