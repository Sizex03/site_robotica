document.getElementById('addToCart').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    alert(`Você adicionou ${quantity} unidade(s) do produto ao carrinho!`);
});