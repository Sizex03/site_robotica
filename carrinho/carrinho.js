// script.js

// Função para carregar produtos do carrinho
function carregarProdutos() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtosDiv = document.getElementById('produtos');

    if (carrinho.length > 0) {
        carrinho.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.className = 'produto'; // Aplica a classe de estilo
            produtoDiv.innerHTML = `<strong>${produto.nome}</strong> - R$${produto.preco.toFixed(2)}`;
            produtosDiv.appendChild(produtoDiv);
        });
        
        // Gerar QR Code com o valor total da compra
        const valorTotal = carrinho.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
        $('#qrCode').qrcode({
            text: 'Pagamento de R$' + valorTotal, // Texto do QR Code
            width: 128,
            height: 128
        });
    } else {
        produtosDiv.innerHTML = '<p>Nenhum produto foi adicionado ao carrinho.</p>';
    }
}

// Exibir ou ocultar formulário de cartão
function toggleCartaoForm() {
    const cartaoForm = document.getElementById('cartaoForm');
    const isCartaoSelected = document.getElementById('cartao').checked;
    cartaoForm.style.display = isCartaoSelected ? 'block' : 'none';
}

// Função para finalizar a compra
function finalizarCompra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinho.length === 0) {
        alert('Nenhum produto no carrinho!');
        return;
    }
    
    // Aqui você pode adicionar qualquer validação adicional

    // Redireciona para a página de compra finalizada
    window.location.href = 'compra-finalizada.html'; 
}

// Carrega os produtos ao abrir a página
window.onload = function() {
    carregarProdutos();
    document.getElementById('pix').onclick = toggleCartaoForm;
    document.getElementById('cartao').onclick = toggleCartaoForm;
    document.getElementById('finalizarCompra').onclick = finalizarCompra; // Chama a função de finalizar compra
};
