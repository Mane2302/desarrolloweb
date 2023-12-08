//Filtrando los valores de un array
var lista = [1, 2, 3, 4, 5];
var listanueva = lista.filter(function (valor) {
  if (valor <= 3) {
    return true;
  } else {
    return false;
  }
});
alert(listanueva);
