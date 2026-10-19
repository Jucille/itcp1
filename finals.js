function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const loginForm = document.getElementById('login-form');
    const menu = document.getElementById('menu');

    if (username === 'ITCP12' && password === '232308') {
      window.location.assign("choose.html")
      
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        loginForm.style.display = 'none';
        menu.style.display = 'block';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password!';
    }
}
