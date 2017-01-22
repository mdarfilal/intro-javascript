/* 
Exercice : fonction minimum
*/

// Renvoie le minimum entre deux valeurs
function min(val1, val2) {
    minValue = Math.min(val1, val2);
    return minValue;
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1