function validateForm(event) {
    event.preventDefault()

    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const sujet = document.getElementById('sujets').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessages = document.getElementById('error-messages');
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
        errorMessages.innerHTML = "Formulaire valide !";
        errorMessages.style.background = "green";
        errorMessages.style.fontWeight = "bold";
    }
}