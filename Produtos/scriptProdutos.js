// Função de Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll(".carouseel-item");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}



function moveCarousel(direction, trackId) {
    let currentIndex = 0;
    const track = document.getElementById(trackId);
    const totalProducts = track.children.length;
    const productsToShow = 3; // Número de produtos exibidos de cada vez
    const maxIndex = Math.ceil(totalProducts / productsToShow) - 1;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const offset = -currentIndex * (100 / productsToShow);
    track.style.transform = `translateX(${offset}%)`;
}

let cartCount = 0; // Variável para contar itens no carrinho
function addToCart(productName) {
    cartCount++; // Incrementa o contador de itens no carrinho
    document.getElementById('cart-count').textContent = cartCount; // Atualiza o contador no botão
    
}

    const productImages = document.querySelectorAll('.product-image');

    // Itera sobre cada imagem e adiciona os eventos 'mouseover' e 'mouseout'
    productImages.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            // Altera a imagem para o valor armazenado no atributo data-hover
            image.src = image.getAttribute('data-hover');
        });

        image.addEventListener('mouseout', function() {
            // Retorna à imagem original armazenada no atributo data-default
            image.src = image.getAttribute('data-default');
        });
    });





