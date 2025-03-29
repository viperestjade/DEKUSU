// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    const Logo = document.getElementById('Logo');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '⏾';
        Logo.src = 'Dekusu images/dekusu logo(Dark).png'
        
    } else {
        darkModeToggle.textContent = '☀︎';
        Logo.src = 'Dekusu images/dekusu logo.png'
    }
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@adnu.edu.ph' && password === 'password123') {
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
