//Agregando un nuevo método al prototipo
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
empleado.edad - 24;
miobjeto.mostraredad = function(){
  alert(this.edad);
}
empleado.mostraredad();