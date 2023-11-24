document.addEventListener('DOMContentLoaded', function() {
    var loginPopup = document.getElementById('login-popup');
    var loginForm = document.getElementById('login-form');

    var links = document.querySelectorAll('.nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            loginPopup.style.display = 'block';

            loginForm.addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Logged in successfully!');
                loginPopup.style.display = 'none';
            });
        });
    });
});