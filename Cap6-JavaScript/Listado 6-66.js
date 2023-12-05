//Accediendo propiedades
var miobjeto = {
  nombre: "Emmanuel",
  edad: 22,
};
var mensaje = "Mi nombre es " + miobjeto.nombre + "\r\n";
mensaje += "Tengo " + miobjeto["edad"] + " años";

alert(mensaje);
