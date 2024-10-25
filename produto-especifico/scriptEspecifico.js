let cartCount = 0;

document.getElementById('addToCart').addEventListener('click', function() {
    const quantity = parseInt(document.getElementById('quantity').value);
    cartCount += quantity;
    document.getElementById('cart-count').innerText = cartCount;
    
});
