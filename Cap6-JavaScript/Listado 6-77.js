//Usando un constructor para crear un objeto
var constructor = function () {
  var nombre = "Emmanuel";
  var edad = 22;
  var objeto = {
    mostrarnombre: function() {
      alert(nombre);
    },
    cambiarnombre: function (nombreNuevo) {
      nombre = nombreNuevo;

    }
  };
  return objeto
}
var empleado = constructor();
empleado.mostrarnombre();