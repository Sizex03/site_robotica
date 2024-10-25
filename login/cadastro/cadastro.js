document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;

    // Armazenamento
    const usuario = {
        nome,
        dataNascimento,
        email,
        senha,
        telefone
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));


    window.location.href = '../login.html';
});
