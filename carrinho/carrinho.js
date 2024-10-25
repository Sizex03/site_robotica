function carregarProdutos() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtosDiv = document.getElementById('produtos');

    if (carrinho.length > 0) {
       
        produtosDiv.innerHTML = '';

        
        carrinho.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.className = 'produto'; 
            produtoDiv.innerHTML = `<strong>${produto.name}</strong> - R$${(produto.price * produto.quantity).toFixed(2)} (Quantidade: ${produto.quantity})`;
            produtosDiv.appendChild(produtoDiv);
        });

        
        const valorTotal = carrinho.reduce((total, produto) => total + (produto.price * produto.quantity), 0).toFixed(2);

        
        $('#qrCode').qrcode({
            text: 'Pagamento de R$' + valorTotal, 
            width: 128,
            height: 128
        });
        
        
        const totalDiv = document.createElement('div');
        totalDiv.className = 'total'; 
        totalDiv.innerHTML = `<h3>Valor Total: R$${valorTotal}</h3>`;
        produtosDiv.appendChild(totalDiv);

    } else {
        produtosDiv.innerHTML = '<p>Nenhum produto foi adicionado ao carrinho.</p>';
    }
}


function toggleCartaoForm() {
    const cartaoForm = document.getElementById('cartaoForm');
    const isCartaoSelected = document.getElementById('cartao').checked;
    cartaoForm.style.display = isCartaoSelected ? 'block' : 'none';
}


function finalizarCompra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinho.length === 0) {
        alert('Nenhum produto no carrinho!');
        return;
    }

   
    localStorage.removeItem('carrinho');

   
    window.location.href = './compra-finalizada.html'; 
}


window.onload = function() {
    carregarProdutos();
    document.getElementById('pix').onclick = toggleCartaoForm;  
    document.getElementById('cartao').onclick = toggleCartaoForm; 
    document.getElementById('finalizarCompra').onclick = finalizarCompra; 
};
