//Buscando un texto al comienzo de la cadena
var lista = [1, 2, 3, 4, 5];
var valido = lista.every(function(valor) {
return valor <= 10;
});
if (valido) {
    alert("Los valores no son mayores que 100")
}