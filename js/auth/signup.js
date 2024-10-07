
// Champs "Prénom du formulaire signup.html"
const inputName = document.getElementById("nameInput");
const inputLastName = document.getElementById("lastNameInput");
const inputEmail = document.getElementById("emailInput");
const inputValidatePassword = document.getElementById("validatePasswordInput");


inputName.addEventListener("keyup", validateForm);
inputLastName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);



// pour vérifier que les champs sont bien remplis. 
function validateForm() {
    validateRequired(inputName);
    validateRequired(inputLastName);
    validateEmail(inputEmail); 

}

// validation de l'input rentré dans le champs "email": 
function validateEmail(input){
    const eamilRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(eamilRegex)){
        // Si le input est valide dans les champs email:
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");

    }else{
         // si l'input dans le champs email: 
         input.classList.remove("is-valid");
         input.classList.add("is-invalid");

    }
}


function validateRequired(input){
    if(input.value != ''){
        // Si le input est valide dans les champs nom et prénom sont corretc:
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");

    }else{
        // si l'input dans nom et prénom n'est pas correct: 
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }

}

