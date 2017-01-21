/* 
Exercice : jeu du ni oui, ni non
*/

var saisie;

while ((saisie !== "oui") && (saisie !== "non")) {
    saisie = prompt("Voulez-vous jouer à ni oui, ni non ?");
}

console.log("Vous avez perdu !");