//Comparando solo las fechas sin considerar la hora
var hoy = new Date(2023, 11, 7, 20, 35);
var futuro = new Date(2023, 11, 7, 20, 35);
hoy.setHours(0,0,0);
futuro.setHours(0,0,0);
if (futuro.getTime() == hoy.getTime()) {
  alert("Las fechas son iguales");
} else {
  alert("Las fechas son diferentes");
}