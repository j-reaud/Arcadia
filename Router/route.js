export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> tout le monde peut y accéder.
[disconnected] -> Réserver aux utilisateurs déconnecté. 
["client"] réservé aux utilisateurs avec le rôle client. 
["client ou admin"] réservé aux utilisateurs avec les rôles client ou admin. 
[admin] réservé aux utilisateurs avec le rôle admin. 
*/


