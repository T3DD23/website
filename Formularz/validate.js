function walidacjaForm() {

    let mail = document.getElementById('mail').value;
    let password = document.getElementById('haslo').value;

    let inputMail = document.getElementById('mail');

    //Obsluga bledow

    let errorMail = document.getElementById('emailError');
    let errorPsw = document.getElementById('paswdError');

    let isValid = true;
    //Style elementu span errorMail
    errorMail.style.fontSize = "12px";
    errorMail.style.color = "red";

    inputMail.style.borderStyle = "solid";
    inputMail.style.borderColor = "red";

    //Style elementu password
    errorPsw.style.fontSize = "12px";
    errorPsw.style.color = "red";

    if (mail === "") {
        errorMail.innerHTML = "Adres mail jest wymagany !";
    } else {
        errorMail.textContent = " ";
    }

    if (password === "") {
        errorPsw.textContent = "Haslo jest wymagane !";
        isValid = false;
    } else {
        errorPsw.textContent = " ";
    }

    return isValid;
}

function walidacjaMail(mail) {
    let mailCorect = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mailCorect.test(mail);
}