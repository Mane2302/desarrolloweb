//Enviando valores iniciales al constructor
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
var empleado = constructor("Emmanuel");
empleado.mostrarnombre();