// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Assuming the form submission is successful
        alert('Thank you for your message!');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+
