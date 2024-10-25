document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    
    const nomeUsuario = document.getElementById('nome-usuario');
    nomeUsuario.textContent = usuario.nome;

  
    const infoPessoais = document.getElementById('info-pessoais');
    infoPessoais.innerHTML = `
        <h3>Informações Pessoais</h3>
        <p>Nome: ${usuario.nome}</p>
        <p>Data de Nascimento: ${usuario.dataNascimento}</p>
        <p>Email: ${usuario.email}</p>
        <p>Telefone: ${usuario.telefone}</p>
    `;

    
    const infoEndereco = document.getElementById('info-endereco');
    infoEndereco.innerHTML = `
        <h3>Informações de Endereço</h3>
        <p>CEP: ${usuario.endereco.cep}</p>
        <p>Rua: ${usuario.endereco.rua}</p>
        <p>Número: ${usuario.endereco.numero}</p>
        <p>Bairro: ${usuario.endereco.bairro}</p>
        <p>Cidade: ${usuario.endereco.cidade}</p>
    `;

    // Adicionar informações de compras anteriores
    const comprasAnteriores = document.getElementById('compras-anteriores');
    const compras = [
        { id: 1, produto: 'Kit de drone programável', data: '2024-01-15', valor: 'R$300,00', quantidade: 2, frete: 'R$ 10,00', formaPagamento: 'Cartão de Crédito', valorTotal: 'R$ 210,00', valorPorProduto: 'R$ 100,00' },
        { id: 2, produto: 'Kitronik Kit de Robótica Simples', data: '2024-02-20', valor: 'R$120,00', quantidade: 1, frete: 'R$ 15,00', formaPagamento: 'Boleto', valorTotal: 'R$ 165,00', valorPorProduto: 'R$ 150,00' },
        { id: 3, produto: 'Kit Carro robô', data: '2024-03-10', valor: 'R$290,00', quantidade: 3, frete: 'R$ 20,00', formaPagamento: 'PayPal', valorTotal: '620,00', valorPorProduto: 'R$ 200,00' },
    ];
    
    comprasAnteriores.innerHTML = '<h3>Compras Anteriores</h3>';
    compras.forEach(compra => {
        const compraDiv = document.createElement('div');
        compraDiv.classList.add('compra');
        compraDiv.innerHTML = `
            <p><strong>ID:</strong> ${compra.id} - <strong>Produto:</strong> ${compra.produto} - <strong>Data:</strong> ${compra.data} - <strong>Valor:</strong> ${compra.valor}</p>
        `;
        
        
        compraDiv.addEventListener('click', function() {
            mostrarDetalhes(compra);
        });

        comprasAnteriores.appendChild(compraDiv);
    });

    
    function mostrarDetalhes(compra) {
        const detalhesCompra = document.getElementById('detalhes-compra');
        detalhesCompra.innerHTML = `
            <h3>Detalhes da Compra</h3>
            <p><strong>Produto:</strong> ${compra.produto}</p>
            <p><strong>Quantidade:</strong> ${compra.quantidade}</p>
            <p><strong>Valor do Frete:</strong> ${compra.frete}</p>
            <p><strong>Valor Total:</strong> ${compra.valorTotal}</p>
            <p><strong>Valor por Produto:</strong> ${compra.valorPorProduto}</p>
            <p><strong>Forma de Pagamento:</strong> ${compra.formaPagamento}</p>
            <button id="fechar-detalhes">Fechar</button>
        `;
        detalhesCompra.style.display = 'block';

        
        document.getElementById('fechar-detalhes').addEventListener('click', function() {
            detalhesCompra.style.display = 'none';
        });
    }

   
    const cupons = [
        { codigo: 'CUPOM10', desconto: '10% de desconto', validade: '2024-12-31' },
        { codigo: 'CUPOM20', desconto: '20% de desconto em compras acima de R$ 200,00', validade: '2024-11-30' },
    ];

    const cuponsDiv = document.getElementById('cupons');
    cuponsDiv.innerHTML = '<h3>Cupons de Desconto Disponíveis</h3>';
    cupons.forEach(cupom => {
        const cupomDiv = document.createElement('div');
        cupomDiv.classList.add('cupom');
        cupomDiv.innerHTML = `
            <p><strong>Código:</strong> ${cupom.codigo} - <strong>Desconto:</strong> ${cupom.desconto} - <strong>Validade:</strong> ${cupom.validade}</p>
        `;
        cuponsDiv.appendChild(cupomDiv);
    });

    
    document.getElementById('info-pessoais-btn').addEventListener('click', function() {
        infoPessoais.style.display = 'block';
        infoEndereco.style.display = 'none';
        comprasAnteriores.style.display = 'none';
        cuponsDiv.style.display = 'none';
        detalhesCompra.style.display = 'none';
    });

    document.getElementById('info-endereco-btn').addEventListener('click', function() {
        infoPessoais.style.display = 'none';
        infoEndereco.style.display = 'block';
        comprasAnteriores.style.display = 'none';
        cuponsDiv.style.display = 'none';
        detalhesCompra.style.display = 'none'; 
    });

    document.getElementById('compras-anteriores-btn').addEventListener('click', function() {
        infoPessoais.style.display = 'none';
        infoEndereco.style.display = 'none';
        comprasAnteriores.style.display = 'block';
        cuponsDiv.style.display = 'none';
        detalhesCompra.style.display = 'none';
    });

    document.getElementById('cupons-btn').addEventListener('click', function() {
        infoPessoais.style.display = 'none';
        infoEndereco.style.display = 'none';
        comprasAnteriores.style.display = 'none';
        cuponsDiv.style.display = 'block';
        detalhesCompra.style.display = 'none'; 
    });

    // Voltar para produtos
    document.getElementById('voltar').addEventListener('click', function() {
        window.location.href = '../../pagina_inicial/index.html'; 
    });
});
