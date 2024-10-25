
const usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario) {
 
    document.getElementById('nome-usuario').textContent = usuario.nome;

    
    document.getElementById('info-pessoais-btn').addEventListener('click', function() {
        document.getElementById('info-pessoais').innerHTML = `
            <h3>Informações Pessoais</h3>
            <p>Nome: ${usuario.nome}</p>
            <p>Data de Nascimento: ${usuario.dataNascimento}</p>
            <p>Email: ${usuario.email}</p>
            <p>Telefone: ${usuario.telefone}</p>
        `;
        mostrarSecao('info-pessoais');
    });

    
    document.getElementById('info-endereco-btn').addEventListener('click', function() {
        document.getElementById('info-endereco').innerHTML = `
            <h3>Informações de Endereço</h3>
            <p>CEP: 12345-678</p>
            <p>Rua: Rua Exemplo</p>
            <p>Logradouro: Logradouro Exemplo</p>
            <p>Número: 123</p>
        `;
        mostrarSecao('info-endereco');
    });

    document.getElementById('compras-anteriores-btn').addEventListener('click', function() {
        document.getElementById('compras-anteriores').innerHTML = `
            <h3>Compras Anteriores</h3>
            <div class="compra">
                <p>Item: Produto A</p>
                <p>Quantidade: 2</p>
                <p>Valor: R$ 50,00</p>
                <p>Forma de Pagamento: Cartão de Crédito</p>
                <p>Valor Final: R$ 100,00</p>
            </div>
            <div class="compra">
                <p>Item: Produto B</p>
                <p>Quantidade: 1</p>
                <p>Valor: R$ 30,00</p>
                <p>Forma de Pagamento: Boleto</p>
                <p>Valor Final: R$ 30,00</p>
            </div>
        `;
        mostrarSecao('compras-anteriores');
    });

    
    document.getElementById('cupons-btn').addEventListener('click', function() {
        document.getElementById('cupons').innerHTML = `
            <h3>Cupons de Desconto Disponíveis</h3>
            <p>CUPOM10 - 10% de desconto</p>
            <p>CUPOMFRETE - Frete grátis</p>
        `;
        mostrarSecao('cupons');
    });
}


function mostrarSecao(secao) {
    
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    document.getElementById(secao).style.display = 'block';
}


document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'produtos.html'; 
});
