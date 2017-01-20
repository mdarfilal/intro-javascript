/* 
Exercice : comparer deux nombres
*/

var nombre1 = Number(prompt("Saisissez le premier nombre :"));
var nombre2 = Number(prompt("Saisissez le deuxième nombre :"));

if (nombre1 < nombre2) {
    console.log(nombre1+" est plus petit que "+nombre2);
} else if (nombre1 === nombre2) {
    console.log(nombre1+" et "+nombre2+" sont égaux");
} else {
    console.log(nombre1+" est plus grand que "+nombre2);
}