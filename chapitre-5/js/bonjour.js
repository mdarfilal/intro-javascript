/* 
Exercice : fonction bonjour avec saisies utilisateur
*/

// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("Saisissez votre prénom :");
var nom = prompt("Saisissez votre nom :");

var message = direBonjour(prenom, nom);
console.log(message);