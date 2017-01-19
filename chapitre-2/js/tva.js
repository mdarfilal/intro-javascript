/* 
Exercice : calculer un prix TTC à partir d'un prix HT
*/

var prix = Number(prompt("Saisir votre prix HT :"));
var tauxTva = 19.6 / 100;
var tva = prix * tauxTva;
var prixTtc = prix + tva;
alert("Le prix TTC est de "+prixTtc+" euros");