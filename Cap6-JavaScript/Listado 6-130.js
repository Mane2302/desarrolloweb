//Comparando dos fechas
var hoy = new Date(2023, 11, 7, 10, 32);
var futuro = new Date(2023, 11, 10, 20, 35);
if (futuro.getTime() == hoy.getTime()) {
alert("Las fechas son iguales");
} else {
alert("Las fechas son diferentes");
}