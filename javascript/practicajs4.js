document.addEventListener("DOMContentLoaded", function () {
  var toogleButton = document.getElementById("toogleButton");
  var Menu = document.getElementById("Menu");

  toogleButton.onclick = function () {
    Menu.style.display = Menu.style.display === "block" ? "none": "block";
  };
});
