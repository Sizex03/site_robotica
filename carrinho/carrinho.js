// Lista de produtos (exemplo)
const produtos = [
    { nome: "Produto 1", preco: 50.00 },
    { nome: "Produto 2", preco: 30.00 },
    { nome: "Produto 3", preco: 20.00 },
];

let valorFrete = 10.00; // Frete fixo para exemplo
let valorTotal = 0;

// Função para atualizar o valor total
function atualizarValores() {
    valorTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
    const totalComFrete = valorTotal + valorFrete;
    document.getElementById('valor-total').innerText = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
    document.getElementById('frete').innerText = `Frete: R$ ${valorFrete.toFixed(2)}`;
    document.getElementById('valor-final').innerText = `Valor Final: R$ ${totalComFrete.toFixed(2)}`;
}

// Função para exibir os produtos no carrinho
function listarProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        listaProdutos.appendChild(li);
    });
}

// Função para alternar campos de pagamento
function togglePagamentoFields() {
    const pixField = document.getElementById('pix-field');
    const cartaoField = document.getElementById('cartao-field');
    if (document.querySelector('input[name="pagamento"]:checked').value === 'pix') {
        pixField.style.display = 'block';
        cartaoField.style.display = 'none';
        gerarQRCode(); // Gera QR Code ao selecionar Pix
    } else {
        pixField.style.display = 'none';
        cartaoField.style.display = 'block';
    }
}

// Função para gerar QR Code
function gerarQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Limpa QR Code anterior
    const valorFinal = valorTotal + valorFrete;
    const qrcode = new QRCode(qrcodeContainer, {
        text: `Pagamento: R$ ${valorFinal.toFixed(2)}`,
        width: 128,
        height: 128,
    });
}

// Função para finalizar a compra
function finalizarCompra() {
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

    if (!logradouro || !numero || !bairro || !cidade || !estado) {
        alert('Por favor, preencha todos os campos de endereço.');
        return;
    }

    if (pagamento === 'cartao') {
        const numeroCartao = document.getElementById('numero-cartao').value;
        const nomeTitular = document.getElementById('nome-titular').value;
        const validade = document.getElementById('validade').value;
        const cvv = document.getElementById('cvv').value;

        if (!numeroCartao || !nomeTitular || !validade || !cvv) {
            alert('Por favor, preencha todos os campos de pagamento.');
            return;
        }
    }

    // Redireciona para a página de compra finalizada
    window.location.href = "compra-finalizada.html";
}

// Listar produtos e calcular valores ao carregar a página
window.onload = function() {
    listarProdutos();
    atualizarValores();
};
