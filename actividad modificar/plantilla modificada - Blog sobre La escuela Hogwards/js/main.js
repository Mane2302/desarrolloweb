(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Tranding carousel
  $(".tranding-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });

  // Carousel item 1
  $(".carousel-item-1").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  // Carousel item 2
  $(".carousel-item-2").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // Carousel item 3
  $(".carousel-item-3").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Carousel item 4
  $(".carousel-item-4").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
})(jQuery);
//------------------------------------------------------------------FECHA AUTOMATICA
// Obtenemos el elemento con el ID 'fechaActual'
var fechaElemento = document.getElementById("fechaActual");

// Obtenemos la fecha actual
var fechaActual = new Date();

// Array de nombres de días de la semana
var dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

// Array de nombres de meses
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Formateamos la fecha para mostrarla en el formato que deseamos
var fechaFormateada =
  dias[fechaActual.getDay()] +
  ", a " +
  fechaActual.getDate() +
  "  " +
  meses[fechaActual.getMonth()] +
  " de " +
  fechaActual.getFullYear();

// Actualizamos el contenido del elemento con la fecha formateada
fechaElemento.textContent = fechaFormateada;


document.addEventListener("DOMContentLoaded", function () {
  // Verificar si ya hay un contador en localStorage
  if (localStorage.getItem("visitas")) {
    // Si existe, obtener el valor actual y aumentarlo en 1
    let visitas = parseInt(localStorage.getItem("visitas")) + 1;
    localStorage.setItem("visitas", visitas);
    document.getElementById("cuentavisitas").innerText = visitas;
  } else {
    // Si no existe, inicializar el contador en 1 y almacenarlo en localStorage
    localStorage.setItem("visitas", 1);
    document.getElementById("contador").innerText = 1;
  }
});
