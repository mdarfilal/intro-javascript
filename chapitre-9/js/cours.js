var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
console.log(films.length); // Affiche 3

console.log("Taille tableau vide");
var tableauVide = []; // Création d'un tableau vide
console.log(tableauVide.length); // Affiche 0

// Acces aux élements du tableau 
console.log("Acces aux éléments du tableau");
console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"

// Parcours du tableau
console.log("Parcours du tableau avec boucle for");
for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}

// Parcours du tableau avec forEach
console.log("Parcours du tableau avec forEach");
films.forEach(function (film) {
    console.log(film);
});

console.log("Push dans le tableau");
films.push("Les Bronzés");

console.log(films[3]); // Affiche "Les Bronzés"

// Création d'un objet film
var Film = {
    // Initialise le film
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

// On crée nos 3 films de type Film
var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

// On crée un tableau et on y ajoute les films créés
var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

// On parcours le tableau et on affiche son contenu
films.forEach(function (film) {
    console.log(film.decrire());
});