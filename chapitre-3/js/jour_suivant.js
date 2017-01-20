/* 
Exercice : afficher le jour suivant
*/

var jour = prompt("Entrez un jour de la semaine :");
var jourSuivant = null;

switch (jour) {
    case "lundi" :
        jourSuivant = "mardi";
        break;
    
    case "mardi" :
        jourSuivant = "mercredi";
        break;
        
    case "mercredi" :
        jourSuivant = "jeudi";
        break;
         
    case "jeudi" :
        jourSuivant = "vendredi";
        break;
         
    case "vendredi" :
        jourSuivant = "samedi";
        break;
         
    case "samedi" :
        jourSuivant = "dimanche";
        break;
         
    case "dimanche" :
        jourSuivant = "lundi";
        break;
    
    default :
        break;
}

if (jourSuivant !== null) {
    console.log("Demain, nous serons "+jourSuivant);
} else {
    console.log("Jour non reconnu !");
}