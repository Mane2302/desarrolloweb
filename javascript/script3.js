document.addEventListener("DOMContentLoaded", function(){
    var scrollarea = document.getElementById("scrollarea");
    scrollarea.onwheel=function(event){
        alert("se giró la rueda del mouse")
    }
})