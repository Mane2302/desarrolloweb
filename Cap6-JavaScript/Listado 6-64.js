//Codificando una cadena de caracteres para incluirla en una URL
var nombre = "Emmanuel Roque Neponuceno";
var codificado = encodeURIComponent(nombre);
var miURL = "http://www.ejemplo.com/contacto.html?nombre=" + codificado;
alert(miURL);