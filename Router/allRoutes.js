import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/habitats", "Habitas", "/pages/habitats.html", []),
    new Route("/marais", "Marais", "/pages/marais.html", []),
    new Route("/savane", "Savane", "/pages/savane.html", []),
    new Route("/jungle", "Jungle", "/pages/jungle.html", []),
    new Route("/signin", "Signin", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Signup", "/pages/auth/signup.html" ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html" ["client", "admin"]),
    new Route("/editpassword", "Changement mot de passe", "/pages/auth/editpassword.html" ["client", "admin"]),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";