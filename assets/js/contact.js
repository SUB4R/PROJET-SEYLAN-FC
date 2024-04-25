document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    alert('Merci, ' + name + '! Votre message a été envoyé.');
    this.reset(); // Optional: Clears the form after submission
});