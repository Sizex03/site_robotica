function addToCart(productName) {
    let cartCount = document.getElementById('cart-count');
    let currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
}

function filterProducts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let productItems = document.querySelectorAll('.produto-item');
    
    productItems.forEach(function(item) {
        let productName = item.querySelector('h3').textContent.toLowerCase();
        
        if (productName.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
