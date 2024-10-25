

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

let cart = [];  
let cartCount = 0; 


document.getElementById('cart-button').addEventListener('click', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.add('open'); 
});


document.getElementById('close-cart').addEventListener('click', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.remove('open'); 
});


function addToCart(productName, price) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity++; 
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    cartCount++;
    updateLocalStorage(); 
    updateCart();
}


function updateLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(cart));
}


function updateCart() {
    
    document.getElementById('cart-count').textContent = cartCount;
    
   
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 

    let totalValue = 0;  
    
    cart.forEach(item => {
        totalValue += item.price * item.quantity;  
        cartItems.innerHTML += `
            <div>
                <span>${item.name}</span>
                <input type="number" min="1" value="${item.quantity}" data-name="${item.name}" onchange="updateQuantity(this)">
                <span>R$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    });
    
    
    document.getElementById('total-value').textContent = totalValue.toFixed(2);
}


function updateQuantity(inputElement) {
    const productName = inputElement.getAttribute('data-name');
    const newQuantity = parseInt(inputElement.value);
    
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        const difference = newQuantity - cart[productIndex].quantity;
        cart[productIndex].quantity = newQuantity;
        cartCount += difference;
        
        if (newQuantity === 0) {
            cart.splice(productIndex, 1);  
        }
        
        updateLocalStorage(); 
        updateCart();
    }
}


document.getElementById('checkout-btn').addEventListener('click', function() {
    window.location.href = '/carrinho/carrinho.html';  
});
