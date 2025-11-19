// Validation du formulaire
const form = document.getElementById("formulaire");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const contribution = form.contribution.value.trim();
    const competences = form.competences.value.trim();

    if(contribution.length > 5 && competences.length > 3) {
        message.textContent = "✅ Merci ! Ta candidature sera étudiée avec attention.";
        form.reset();
    } else {
        message.textContent = "❌ Merci de remplir correctement les champs de contribution et compétences.";
    }
});
