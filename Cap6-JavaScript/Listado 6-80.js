//Usando un constructor para crear un objeto
//Definiendo valores iniciales para el objeto
var miobjeto = {
  nombre: "Emmanuel",
  edad: 22,
  mostrarnombre: function () {
    alert(this.nombre);
  },
  cambiarnombre: function (nombreNuevo) {
    this.nombre = nombreNuevo;
  },
};
var empleado = Object.create(miobjeto);
empleado.cambiarnombre("José")
empleado.mostrarnombre();
miobjeto.mostrarnombre();