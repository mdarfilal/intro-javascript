/*
Exercice : saisie d'une liste de mots
*/

var mot = "";
var stop = "stop";
var mots = [];

// Lecture de la saisie utilisateur jusqu'à ce qu'il saisisse "stop"
while (mot !== stop) {
    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== stop) {
        mots.push(mot);    
    }
}

// Affichage de tous les mots saisis
mots.forEach(function (mot) {
   console.log(mot); 
});