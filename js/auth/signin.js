const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // appeler l'api pour vérifier les credentials en bdd. 
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("Vous êtes connecté.");

        // Il faudra récupérer le vrai token
        const token = "jqlkdjfqlskfjqlfkjqmlkqjfmldkjqmlkdfj";
        setToken(token);

        //placer le token en coockie:
        setCookie(roleCookieName, "admin", 7);
        window.location.replace("/"); // ceci permet de rediriger l'utilisateur vers la page d'accueil.
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}