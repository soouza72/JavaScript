function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const loginMessage = document.getElementById('loginMessage');

  // Usuário e senha de exemplo (pode mudar depois)
  if (username === 'admin' && password === '1234') {
    loginMessage.style.color = 'green';
    loginMessage.textContent = 'Login efetuado com sucesso! Redirecionando...';
    setTimeout(() => {
      window.location.href = 'painel.html';
    }, 1500);
  } else {
    loginMessage.style.color = 'red';
    loginMessage.textContent = 'Usuário ou senha incorretos.';
  }
}
