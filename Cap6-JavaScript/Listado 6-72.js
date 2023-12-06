//Devolviendo valores desde métodos
var miobjeto = {
  nombre: "Emmanuel",
  edad: 22,
  mostrarDatos: function () {
    var mensaje = "Nombre: " + miobjeto.nombre + "\r\n";
    mensaje += "Edad: " + miobjeto.edad;
    alert(mensaje);
  },
  cambiarNombre: function (nombreNuevo) {
    var nombreViejo = miobjeto.nombre;
    miobjeto.nombre - nombreNuevo;
    return nombreViejo;
  },
};
var anterior = miobjeto.cambiarNombre("Pepito");
alert("El nombre anterior era: " + anterior);