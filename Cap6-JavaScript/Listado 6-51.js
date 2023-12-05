//Procesando datos con funciones
var total = 5;
function calcularvalores() {
    total = total * 2;
}

for(var f=0; f<10; f++){
    calcularvalores();
}
alert('El total es: ' + total);