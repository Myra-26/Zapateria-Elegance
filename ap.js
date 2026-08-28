document.getElementById('login-container').addEventListener('submit', function(event) { 
event.preventDefault(); 
const username = document.getElementById('username').value; 
const password = document.getElementById('password').value; 
// usuario y la contraseñas 
const validUsername = 'Admisaurio'; 
const validPassword = '1234'; 
if (username === validUsername && password === validPassword) { 
// rederigir a la pagina de la tienda 
window.location.href = 'tienda.html'; 
} else { 
// mensaje de error
document.getElementById('errorMessge').textContent = 'Invalid username or password'; 
} 
}); 
