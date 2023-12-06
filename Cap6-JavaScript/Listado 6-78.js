//Usando un constructor para crear un objeto
//Creando objetos con el operador <b>new</b>jetos
function MiObjeto() {
    this.nombre = "Emmanuel";
    this.edad = 22;
    this.mostrarnombre = function () {
      alert(this.nombre);
    }
    this.cambiarnombre = function (nombreNuevo) {
      this.nombre = nombreNuevo;
    };
}
var empleado = new MiObjeto();
empleado.mostrarnombre();