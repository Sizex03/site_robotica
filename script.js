let currentIndex = 0;

function moveCarousel(direction, trackId) {
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
    alert(`${productName} foi adicionado ao carrinho!`);
}


