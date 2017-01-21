/* 
Exercice : contrôle de saisie
*/

var nombreSaisi = 0;

while (!(nombreSaisi >= 50 && nombreSaisi <= 100)) {
    nombreSaisi = Number(prompt("Saisissez un nombre entre 50 et 100 : "));
}