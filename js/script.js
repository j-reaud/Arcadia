
const tokenCookieName = "accesstoken";
const roleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn"); //pour gérer la déconnexion. 

signoutBtn.addEventListener("click", signout); //quand on click sur "déconnexion l'user se déconnecte"

// function pour récupérer le role de l'utilisateur
function getRole(){
    return getCookie(roleCookieName);
}

function signout(){ // quand l'utilisateur se déconnect on efface le cookie. 
    eraseCookie(tokenCookieName);
    eraseCookie("role");
    window.location.reload(); //recharger la page. 
}



function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){ //permet de returner le cookie du token
    return getCookie(tokenCookieName);
}




function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Savoir si l'utilisateur est connecté ou pas: 
function isConnected(){
    const token = getToken(); // obtenir le token
    if(token === null || token === undefined){
        return false;
    }
    else{
        return true;
    }
}


/*
disconnected
connected (admin ou client)
    - admin 
    - client
*/


// afficher ou cacher des élements en fonctions si l'user est connecté ou pas. 
function showAndHideElementsForRole(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    //parcourir tous les éléments: 
    allElementsToEdit.forEach(element => {
        switch(element.dataset.show){ // ceci nous permet de récuperer tous les éléments d'un data attribute avec le nom "data-show"
            case 'disconnected':
                if(userConnected){ // si user connecté, masquer élément. 
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){ // si user no connecté, masquer élément 
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || role != "admin"){ // si user non connecté ou role n'est pas admin.
                    element.classList.add("d-none");
                }
                break;
            case 'client':
                if(!userConnected || role != "client"){ // si user non connecté ou rol n'est pas client. 
                    element.classList.add("d-none");
                }
                break;
            
        }
    })



}