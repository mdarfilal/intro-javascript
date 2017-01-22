/* 
Exercice : fonction calculatrice
*/

// Calcule le résultat en fonction de l'opération
function calculer(val1, operation, val2) {
    var result;
    
    switch (operation) {
        case "+":
            result = val1 + val2;
            break;
            
        case "-":
            result = val1 - val2;
            break;
            
        case "*":
            result = val1 * val2;
            break;
            
        case "/":
            result = val1 / val2;
            break;
            
        default :
            break;
    }
    
    return result;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity