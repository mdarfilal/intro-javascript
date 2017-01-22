function direBonjour() {
    return "Bonjour !";
}

console.log("Début du programme");
var resultat = direBonjour();
console.log(resultat);
console.log("Fin du programme");

function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));