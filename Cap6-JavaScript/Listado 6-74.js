//Usando un constructor para crear un objeto
var constructor = function () {
  var objeto = {
    nombre: "Emmanuel",
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
var empleado = constructor();
empleado.mostrarnombre();