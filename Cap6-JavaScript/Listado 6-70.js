//Listado 6-70: Creando objetos dentro de objetos
var nombrePropiedad = "nombre";
var miobjeto = {
  nombre: "Emmanuel",
  edad: 22,
  motocicleta: {
    modelo: "Susuki",
    fecha: 1981
  }
};
alert(miobjeto.nombre + " tiene una " + miobjeto.motocicleta.modelo)
