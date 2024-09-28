function irAServicios() {
    document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
}

function irAServiciosDisp() {
    document.getElementById('serviciosDisp').scrollIntoView({ behavior: 'smooth' });
}

const carouselContainer = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20; // Ancho de la tarjeta más el margen

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const offset = -currentIndex * cardWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

// Evento para botón 'prev'
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Evento para botón 'next'
nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});