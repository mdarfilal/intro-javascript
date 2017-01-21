/* 
Exercice : construire et afficher un triangle de 7 lignes
*/

var diez = "#";
for (var tour = 1; tour <= 7; tour++) {
    var triangle = "";
    for (var i = 1; i <= tour; i++) {
        triangle += diez;
    }
    console.log(triangle);
}

/*
Méthode du correcteur

var ligne = "";
for (var i = 1; i <= 7; i++) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
}
*/