document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    const username = document.getElementById('username').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');

   
    
    if (username === 'admin' && senha === '1234') {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login executado com sucesso!';

       
        
        setTimeout(() => {
            window.location.href = '/login/sucesso/sucesso.html'; 
            
        }, 1000);
        
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Nome ou senha inválidos';

       
        
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    }
});
