// Puedes agregar información sobre lugares destacados aquí
const placesData = [
  {
    name: "Iglesia de San Miguel Arcángel",
    image: "iglesia.jpg",
    description: "El corazón de nuestro pueblo.",
  },
  {
    name: "H. Ayuntamiento",
    image: "recursos/ayuntamiento.jpg",
    description: "Disfruta de la naturaleza a orillas del río.",
  },
  {
    name: "Río Quetzala",
    image: "recursos/rio.jpg",
    description: "Disfruta de la naturaleza a orillas del río.",
  },
  {
    name: "Cerro de la Trinchera",
    image: "recursos/trinchera.jpg",
    description: "Lugar donde trincheró Vicente Guerrero.",
  }
  
];

// Función para mostrar lugares destacados en la página
// ... (resto del código)

function displayPlaces() {
    const placesContainer = document.getElementById("places-container");
  
    const prevButton = document.createElement("button");
    prevButton.textContent = "Anterior";
    prevButton.addEventListener("click", () => navigate(-1));
  
    const nextButton = document.createElement("button");
    nextButton.textContent = "Siguiente";
    nextButton.addEventListener("click", () => navigate(1));
  
    placesContainer.appendChild(prevButton);
  
    placesData.forEach((place, index) => {
      const placeCard = document.createElement("div");
      placeCard.classList.add("place-card");
  
      const image = document.createElement("img");
      image.src = place.image;
      image.alt = place.name;
  
      // Aplicar estilos a las imágenes
      image.style.width = '500px';  // Establecer el ancho
      image.style.height = 'auto'; 
  
      const name = document.createElement("h3");
      name.textContent = place.name;
  
      const description = document.createElement("p");
      description.textContent = place.description;
  
      placeCard.appendChild(image);
      placeCard.appendChild(name);
      placeCard.appendChild(description);
  
      placesContainer.appendChild(placeCard);
  
      // Mostrar la primera imagen al cargar la página
      if (index === 0) {
        placeCard.classList.remove("hidden");
      } else {
        placeCard.classList.add("hidden");
      }
    });
  
    placesContainer.appendChild(nextButton);
    console.log("Mostrando lugares destacados");
  }
  
  
  
let currentIndex = 0;  // Índice de la imagen actual

function navigate(step) {
  const placeCards = document.querySelectorAll(".place-card");

  // Ocultar la imagen actual
  placeCards[currentIndex].classList.add("hidden");

  // Actualizar el índice de la imagen actual
  currentIndex += step;

  // Verificar límites
  if (currentIndex < 0) {
    currentIndex = placeCards.length - 1;
  } else if (currentIndex >= placeCards.length) {
    currentIndex = 0;
  }

  // Mostrar la nueva imagen
  placeCards[currentIndex].classList.remove("hidden");
}

// ... (resto del código)
  

// Llama a la función para mostrar lugares cuando la página se carga completamente
window.addEventListener("load", displayPlaces);

  