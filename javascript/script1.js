document.addEventListener("DOMContentLoaded", function(){
    var boton = this.getElementById("boton")
    boton.addEventListener("click", function(){
        alert("Estas yendo a Youtube");
        window.location.href="http://www.youtube.com/";
    })
})

document.addEventListener("DOMContentLoaded", function(){
    var boton2 = this.getElementById("boton2")
    boton2.addEventListener("click", function(){
        alert("Estas yendo a Facebook");
        window.location.href="http://www.youtube.com/";
    })
})