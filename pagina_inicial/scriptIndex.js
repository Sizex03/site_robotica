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

// Função de adicionar ao carrinho
let cartCount = 0; // Variável para contar itens no carrinho
function addToCart(productName) {
    cartCount++; // Incrementa o contador de itens no carrinho
    document.getElementById('cart-count').textContent = cartCount; // Atualiza o contador no botão
   
}


