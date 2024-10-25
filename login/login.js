document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');

    // localstorafe
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // verificação
    if (usuario && usuario.nome === username && usuario.senha === senha) {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login executado com sucesso!';

        window.location.href = './sucesso/sucesso.html';
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Nome ou senha inválidos.';
    }
});
