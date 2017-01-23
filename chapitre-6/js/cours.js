console.log("1) Longueur de : ABC");
console.log("ABC".length); // Affiche 3

console.log("2) Longueur de : Je suis une chaîne");
console.log("Je suis une chaîne".length); // Affiche 18

console.log("3) Longueur de : Kangourou");
var mot = "Kangourou";
var longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // Affiche 9


var motInitial = "Bora-Bora";
console.log("4) Bora-Bora toLowerCase");
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // Affiche "bora-bora"
console.log("5) Bora-Bora toUpperCase");
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"

var chaine = "azerty";
console.log("6) azerty === azerty");
console.log(chaine === "azerty"); // Affiche true
console.log("7) azerty === qwerty");
console.log(chaine === "qwerty"); // Affiche false

var sport = "Tennis-ballon"; // 13 caractères
console.log("8) "+sport);
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]); // Affiche "n"
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !

var prenom = "Odile";
for (var i = 0; i < prenom.length; i++) {
    console.log(prenom[i]);
}