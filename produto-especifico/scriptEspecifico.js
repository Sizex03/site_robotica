let cartCount = 0;

document.getElementById('addToCart').addEventListener('click', function() {
    const quantity = parseInt(document.getElementById('quantity').value);
    cartCount += quantity;
    document.getElementById('cart-count').innerText = cartCount;
    
});

// Função de Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);