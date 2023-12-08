//Devolviendo valores desde métodos
var miobjeto = {
  nombre: "Emmanuel",
  edad: 22,
  mostrarDatos: function () {
    var mensaje = "Nombre: " + this.nombre + "\r\n";
    mensaje += "Edad: " + this.edad;
    alert(mensaje);
  },
  cambiarNombre: function (nombreNuevo) {
    var nombreViejo = this.nombre;
    this.nombre - nombreNuevo;
    return nombreViejo;
  },
};
var anterior = miobjeto.cambiarNombre("Pepito");
alert("El nombre anterior era: " + anterior);