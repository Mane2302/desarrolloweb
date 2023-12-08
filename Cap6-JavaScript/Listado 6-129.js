//Calculando un intervalo en días
var hoy = new Date(2023, 11, 7);
var futuro = new Date(2024, 6, 8);
var intervalo = futuro - hoy;
var segundos = intervalo / (1000 * 60 * 60 * 24);
alert(segundos + "días");
