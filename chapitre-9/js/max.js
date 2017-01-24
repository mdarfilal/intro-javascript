/*
Exercice : maximum d'un tableau
*/

var valeurs = [11, 3, 7, 2, 9, 10];

var max = 0;

valeurs.forEach(function (valeur) {
   if (max < valeur) {
       max = valeur;
   } 
});

console.log("Le maximum des éléments vaut "+max);