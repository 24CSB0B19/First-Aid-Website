script.js
function signup() {
  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const phone = document.getElementById('signup-phone').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm').value;
  const message = document.getElementById('signup-message');

  if (!username || !email || !phone || !password || !confirmPassword) {
    message.textContent = 'Please fill all fields.';
    message.style.color = 'red';
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    message.style.color = 'red';
    return;
  }

  // Save user data
  const userData = { username, email, phone, password };
  localStorage.setItem('user', JSON.stringify(userData));

  message.textContent = 'Signup successful!';
  message.style.color = 'green';
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const loginMessage = document.getElementById("login-message");

  // Retrieve stored user data
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Validate user data
  if (storedUser && username === storedUser.username && password === storedUser.password) {
    // Save logged-in username
    localStorage.setItem("loggedInUser", username);

    // Redirect to test.html
    window.location.href = "checking.html";
  } else {
    loginMessage.textContent = "Invalid username or password.";
    loginMessage.style.color = 'red';
  }
}
