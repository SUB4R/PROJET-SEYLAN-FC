document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;

    // Simple validation check
    if (!name || !email || !password || !confirmpassword) {
        alert('Please fill in all fields.');
        return;
    }

    // Further processing here
    alert('Registration successful!');
    // Typically here you would send data to a server
});

document.addEventListener('DOMContentLoaded', function() {
    const champMotDePasse = document.getElementById('password');
    const champConfirmerMotDePasse = document.getElementById('confirm-password');
    const formulaire = document.getElementById('registrationForm');

    function verifierCorrespondanceDesMotsDePasse() {
        if (champMotDePasse.value !== champConfirmerMotDePasse.value) {
            champConfirmerMotDePasse.setCustomValidity("Les mots de passe ne correspondent pas.");
        } else {
            champConfirmerMotDePasse.setCustomValidity("");
        }
    }

    champMotDePasse.addEventListener('input', verifierCorrespondanceDesMotsDePasse);
    champConfirmerMotDePasse.addEventListener('input', verifierCorrespondanceDesMotsDePasse);

    formulaire.addEventListener('submit', function(event) {
        if (!formulaire.checkValidity()) {
            event.preventDefault();
        }
    });
});