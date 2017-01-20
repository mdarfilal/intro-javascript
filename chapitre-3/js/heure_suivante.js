/* 
Exercice : afficher l'heure une seconde plus tard
*/

var heures = Number(prompt("Entrez les heures :"));
var minutes = Number(prompt("Entrez les minutes :"));
var secondes = Number(prompt("Entrez les secondes :"));

if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)) {
    secondes += 1;

    if (secondes === 60) {
        secondes = 0;
        minutes += 1;
    }

    if (minutes === 60) {
        minutes = 0;
        heures += 1;
    }

    if (heures === 24) {
        heures = 0;
    }

    console.log("Dans une seconde, il sera "+heures+" heures, "+minutes+" minutes et "+secondes+" secondes")
} else {
    console.log("Heure incorrecte !");
}