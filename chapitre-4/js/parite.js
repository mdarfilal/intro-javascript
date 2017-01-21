/* 
Exercice : afficher les nombres pairs et impairs
*/

var nombreInitial = Number(prompt("Saisissez le nombre initial :"));

for (var i = nombreInitial; i < nombreInitial + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}