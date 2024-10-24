document.getElementById('info-pessoais').addEventListener('click', function() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <h2>Informações Pessoais</h2>
        <ul>
            <li>Nome: Marcos Silva</li>
            <li>Data de Nascimento: 01/01/1991</li>
            <li>Email: marcossilva@email.com</li>
            <li>Senha: ********</li>
            <li>Telefone: (11) 99994-9999</li>
        </ul>
    `;
});

document.getElementById('info-endereco').addEventListener('click', function() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <h2>Informações de Endereço</h2>
        <ul>
            <li>CEP: 68742-000</li>
            <li>Rua: Avenida das Flores</li>
            <li>Logradouro: Edifício Primavera</li>
            <li>Número: 100</li>
            <li>Bairro: Nova Olinda</li>
            <li>Cidade: Castanhal</li>
            <li>Estado: PA</li>
        </ul>
    `;
});

document.getElementById('compras-anteriores').addEventListener('click', function() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <h2>Compras Anteriores</h2>
        <div class="purchase-card" onclick="showPurchaseDetails('Arduino', 2, 50.00, 'Cartão de Crédito', 100.00)">
            <strong>Arduino</strong><br>
            <span>Quantidade: 2</span><br>
            <span>Valor: R$ 50,00</span>
        </div>
        <div class="purchase-card" onclick="showPurchaseDetails('Protoboard', 1, 150.00, 'Boleto', 150.00)">
            <strong>Protoboard</strong><br>
            <span>Quantidade: 1</span><br>
            <span>Valor: R$ 150,00</span>
        </div>
        <div class="purchase-card" onclick="showPurchaseDetails('Kit com leds', 3, 30.00, 'Pix', 90.00)">
            <strong>Kit com leds</strong><br>
            <span>Quantidade: 3</span><br>
            <span>Valor: R$ 30,00</span>
        </div>
    `;
});

document.getElementById('cupons-desconto').addEventListener('click', function() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <h2>Cupons de Desconto Disponíveis</h2>
        <ul>
            <li>CUPOM10 - 10% de desconto na próxima compra</li>
            <li>CUPOMFRETE - Frete grátis acima de R$ 200,00</li>
            <li>CUPOMBLACK - 20% de desconto em produtos selecionados na Black Friday</li>
        </ul>
    `;
});

function showPurchaseDetails(produto, quantidade, valorUnitario, formaPagamento, valorFinal) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <h2>Detalhes da Compra</h2>
        <ul>
            <li>Produto: ${produto}</li>
            <li>Quantidade: ${quantidade}</li>
            <li>Valor Unitário: R$ ${valorUnitario.toFixed(2)}</li>
            <li>Forma de Pagamento: ${formaPagamento}</li>
            <li>Valor Final: R$ ${valorFinal.toFixed(2)}</li>
        </ul>
    `;
}
