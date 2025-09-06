// Mini jeu d'animation pour la section projets
const projetCard1 = document.querySelector('#pc1'); //Récupère le bloc du contenu du premier projet
const projetCard1Button = document.querySelector('#pc1b'); //Récupère le bouton du premier projet

const projetCard2 = document.querySelector('#pc2');
const projetCard2Button = document.querySelector('#pc2b');

const projetCard3 = document.querySelector('#pc3');
const projetCard3Button = document.querySelector('#pc3b');

projetCard1Button.addEventListener("click", () => {
    if (projetCard1.style.overflow === "visible") {
        projetCard1.style.overflow = "hidden";
        projetCard1.style.height = "150px";
        projetCard1Button.innerHTML = "Voir plus";
    } else {
        projetCard1.style.overflow = "visible";
        projetCard1.style.height = "auto";
        projetCard1Button.innerHTML = "Voir moins";
    }
});


projetCard2Button.addEventListener("click", () => {
    if (projetCard2.style.overflow === "visible") {
        projetCard2.style.overflow = "hidden";
        projetCard2.style.height = "150px";
        projetCard2Button.innerHTML = "Voir plus";
    } else {
        projetCard2.style.overflow = "visible";
        projetCard2.style.height = "auto";
        projetCard2Button.innerHTML = "Voir moins";
    }
});

projetCard3Button.addEventListener("click", () => {
    if (projetCard3.style.overflow === "visible") {
        projetCard3.style.overflow = "hidden";
        projetCard3.style.height = "150px";
        projetCard3Button.innerHTML = "Voir plus";
    } else {
        projetCard3.style.overflow = "visible";
        projetCard3.style.height = "auto";
        projetCard3Button.innerHTML = "Voir moins";
    }
});




// Validation Formulaire
function validateForm(event) {
    event.preventDefault()

    const nom = document.querySelector('#nom').value.trim();
    const prenom = document.querySelector('#prenom').value.trim();
    const sujet = document.querySelector('#sujets').value.trim();
    const message = document.querySelector('#message').value.trim();
    const errorMessages = document.querySelector('#error-messages');
    let errors = [];
    let regexNoms = /^[a-zA-Z]+$/;
    let regexSujetMessage = /^\d+$/;


    if (nom === '') {
        errors.push("Le champ 'Nom' est requis.");
    } else if (nom.length < 2) {
        errors.push("Le champ 'Nom' doit contenir au moins 2 caractères.");
    } else if (!regexNoms.test(nom)) {
        errors.push("Le champ 'Nom' ne doit contenir que des lettres.");
    }

    if (prenom === '') {
        errors.push("Le champ 'Prénom' est requis.");
    } else if (prenom.length < 2) {
        errors.push("Le champ 'Prénom' doit contenir au moins 2 caractères.");
    } else if (!regexNoms.test(prenom)) {
        errors.push("Le champ 'Prénom' ne doit contenir que des lettres.");
    }

    if (sujet === '') {
        errors.push("Le champ 'Sujet' est requis.");
    } else if (sujet.length < 5) {
        errors.push("Le champ 'Sujet' doit contenir au moins 5 caractères.");
    } else if (sujet.length > 100) {
        errors.push("Le champ 'Sujet' ne doit pas dépasser 100 caractères.");
    } else if (regexSujetMessage.test(sujet.trim())) {
        errors.push("Le champ 'Sujet' ne doit pas contenir uniquement des chiffres.");
    }

    if (message === '') {
        errors.push("Le champ 'Message' est requis.");
    } else if (message.length < 10) {
        errors.push("Le champ 'Message' doit contenir au moins 10 caractères.");
    } else if (message.length > 500) {
        errors.push("Le champ 'Message' ne doit pas dépasser 300 caractères.");
    } else if (regexSujetMessage.test(message.trim())) {
        errors.push("Le champ 'Message' ne doit pas contenir uniquement des chiffres.");
    }

    errorMessages.style.padding = "20px";
    errorMessages.style.width = "100%";
    errorMessages.style.color = "white";

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
        errorMessages.style.background = "red";
        errorMessages.style.fontWeight = "bold";

    } else {
        errorMessages.innerHTML = "Formulaire valide";
        errorMessages.style.background = "green";
        errorMessages.style.fontWeight = "bold";
    }
}