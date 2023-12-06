//Declarando y ejecutando métodos
var miobjeto = {
  nombre: "Emmanuel",
  edad: 22,
  mostrarDatos: function () {
    var mensaje = "Nombre: " + miobjeto.nombre + "\r\n";
    mensaje += "Edad: " + miobjeto.edad;
    alert(mensaje);
  },
  cambiarNombre: function (nombreNuevo) {
    miobjeto.nombre = nombreNuevo;
  },
};
miobjeto.mostrarDatos();
miobjeto.cambiarNombre("Pepe");
miobjeto.mostrarDatos();