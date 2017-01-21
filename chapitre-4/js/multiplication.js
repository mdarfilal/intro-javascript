/* 
Exercice : table de multiplication
*/

var nombre = 0;

while (!(nombre >= 2 && nombre <= 9)) {
    nombre = Number(prompt("Saisissez un nombre entre 0 et 9 :"));
}

console.log("Voici la table de multiplication de "+nombre);

for (var i = 1; i <= 9; i++) {
    console.log(nombre+" x "+i+" = "+(nombre*i)); 
}