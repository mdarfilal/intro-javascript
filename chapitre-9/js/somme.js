/*
Exercice : somme des valeurs d'un tableau
*/

var valeurs = [11, 3, 7, 2, 9, 10];

var somme = 0;

// Parcours l'ensemble du tableau
// Et ajouts la valeur à la variable somme
valeurs.forEach(function(valeur) {
   somme += valeur; 
});

console.log("La somme des éléments vaut "+somme);