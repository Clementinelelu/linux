// Formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupérer les valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Vérification simple des champs
    if (name && email && message) {
        document.getElementById("responseMessage").innerHTML = "<p style='color: green;'>Merci, votre message a bien été envoyé !</p>";
        // Réinitialisation du formulaire
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerHTML = "<p style='color: red;'>Veuillez remplir tous les champs.</p>";
    }
});
