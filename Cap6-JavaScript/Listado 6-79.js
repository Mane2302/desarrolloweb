//Usando un constructor para crear un objeto
//Definiendo valores iniciales para el objeto
function MiObjeto(nombreinicial, edadinicial) {
    this.nombre = nombreinicial;
    this.edad = edadinicial;
    this.mostrarnombre = function () {
      alert(this.nombre);
    }
    this.cambiarnombre = function (nombreNuevo) {
      this.nombre = nombreNuevo;
    };
}
var empleado = new MiObjeto("Adán", 57);
empleado.mostrarnombre();