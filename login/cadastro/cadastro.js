document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;

    const usuario = {
        nome,
        dataNascimento,
        email,
        senha,
        telefone,
        endereco: {
            cep,
            rua,
            numero,
            bairro,
            cidade
        }
    };

    // Armazenar no Local Storage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionar para a página de login
    window.location.href = '../login.html';
});
