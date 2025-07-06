// Hamburger menu toggle function
function toggleMenu() {
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    
    // Toggle the active class for both navigation sections
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navBar = document.querySelector('.nav-bar');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    
    if (!navBar.contains(event.target)) {
        navLeft.classList.remove('active');
        navRight.classList.remove('active');
    }
});

// Login form validation (existing functionality)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    let isValid = true;
    
    // Username validation
    const username = document.getElementById('username').value;
    if (!username.trim()) {
        showError('usernameError', 'Username is required');
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email').value;
    if (!email.trim()) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Password validation
    const password = document.getElementById('password').value;
    if (!password.trim()) {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.length < 7) {
        showError('passwordError', 'Password must be at least 7 characters');
        isValid = false;
    }
    
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
