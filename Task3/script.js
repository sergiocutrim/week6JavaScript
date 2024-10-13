document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('errorMessage');
  form.addEventListener('submit', (event) => {
    errorMessage.textContent = '';
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;
    if (username.length < 5) {
    errorMessage.textContent += 'Username must be at least 5 characters long.\n';
    isValid = false;
    }
    if (password.length < 8) {
    errorMessage.textContent += 'Password must be at least 8 characters long.\n';
    isValid = false;
    }
    if (!isValid) {
    event.preventDefault();
    }
});
});
