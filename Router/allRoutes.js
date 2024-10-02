import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Habitas", "/pages/habitats.html"),
    new Route("/marais", "Marais", "/pages/marais.html"),
    new Route("/savane", "Savane", "/pages/savane.html"),
    new Route("/jungle", "Jungle", "/pages/jungle.html"),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";