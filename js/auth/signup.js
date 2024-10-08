
// Champs du formulaire signup.html"
const inputName = document.getElementById("nameInput");
const inputLastName = document.getElementById("lastNameInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("inputPassword"); 
const inputValidatePassword = document.getElementById("validatePasswordInput");
const btnValidate = document.getElementById("btnValidate");



//Events listener pour chaque champs du formulaire.
inputName.addEventListener("keyup", validateForm);
inputLastName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);


// pour vérifier que les champs sont bien remplis. 
function validateForm() {
    const nomOk = validateRequired(inputName);
    const prenomOk = validateRequired(inputLastName);
    const emailOk = validateEmail(inputEmail); 
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

    // Activer le btn si tout est ok ou desactiver si ce n'est pas le cas:
    if(nomOk && prenomOk && emailOk && passwordOk && passwordConfirmOk){
        btnValidate.disabled = false;
    }else{
        btnValidate.disabled = true; 
    }
}

// validation de l'input rentré dans le champs "password": 
function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        // Si le input est valide dans les champs password:
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
         // si l'input dans le champs email: 
         input.classList.remove("is-valid");
         input.classList.add("is-invalid");
         return false;
    }
}

//Vérifier si l'input validation pwd = pwd. 
function validateConfirmationPassword(inputPwd, inputConfirmpwd){
    if(inputPwd.value === inputConfirmpwd.value){
        inputConfirmpwd.classList.add("is-valid");
        inputConfirmpwd.classList.remove("is-invalid");
        return true;
    }else{
        inputConfirmpwd.classList.add("is-invalid");
        inputConfirmpwd.classList.remove("is-valid");
        return false;
    }
}



// validation de l'input rentré dans le champs "email": 
function validateEmail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        // Si le input est valide dans les champs email:
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
         // si l'input dans le champs email: 
         input.classList.remove("is-valid");
         input.classList.add("is-invalid");
         return false;
    }
}


// Validation des chaps nom et prénom:
function validateRequired(input){
    if(input.value != ''){ // si la valeur est différent d'un champs vide :
        // Si le input est valide dans les champs nom et prénom sont corretc:
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;

    }else{
        // si l'input dans nom et prénom n'est pas correct: 
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false; 
    }

}












