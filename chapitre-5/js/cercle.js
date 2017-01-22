/*
Exercice : périmètre et aire d'un cercle
*/

// Calcul le périmètre d'un cercle
function calculPerimetre(rayon) {
    var perimetre = 2 * Math.PI * rayon
    return perimetre;
}

// Calcul l'aire d'un cercle
function calculAire(rayon) {
    var aire = rayon * rayon * Math.PI;
    return aire;
}

var rayon = Number(prompt("Saisissez le rayon d'un cercke :"));
var perimetre = calculPerimetre(rayon);
var aire = calculAire(rayon);

console.log("Son périmètre vaut "+perimetre);
console.log("Son aire vaut "+aire);