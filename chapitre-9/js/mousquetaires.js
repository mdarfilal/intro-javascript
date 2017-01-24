/*
Exercice : les trois mousquetaires
*/

// Tableau mousquetaires initialisé avec 3 noms
var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires :");

// Parcours et affichage du contenu du tableau mousquetaires
// à l'aide de la boucle for
for (i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

// Ajout d'une ligne dans le tableau
mousquetaires.push("D'Artagnan");

console.log("A présent, ils sont quatre !");

// Parcours et affichage du contenu du tableau mousquetaires
// à l'aide de la fonction forEach()
mousquetaires.forEach(function (mousquetaire) {
    console.log(mousquetaire);
});