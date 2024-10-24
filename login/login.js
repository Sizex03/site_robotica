document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de enviar o formulário

    const username = document.getElementById('username').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');

    // Verificação simples do login e senha
    if (username === 'admin' && senha === '1234') {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login executado com sucesso!';
       
        // window.location.href = 'próxima página - criar - página de sucesso';
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'nome ou senha inválido';
    }
});
