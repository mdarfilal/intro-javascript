/* 
Exercice : afficher le nombre de jours d'un mois
*/

var mois = Number(prompt("Entrez le numéro d'un mois :"));
var nombreDeJours = null;

switch (mois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        nombreDeJours = 31;
        break;
        
    case 2:
        nombreDeJours = 29;
        break;
    
    case 4:
    case 6:
    case 9:
    case 11:
        nombreDeJours = 30;
        break;
    
    default :
        break;
}

if (nombreDeJours !== null) {
    console.log("Ce mois comporte "+nombreDeJours+" jours");
} else {
    console.log("Mois non reconnu !");
}