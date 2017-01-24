/*
Exercice : gestion d'un chenil
*/

var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie la description du chien
    decrire: function () {
      return this.nom + " est un " + this.race + " mesurant " + this.taille + ".";
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

// Création et initialisation du premier chien
var crockdur = Object.create(Chien);
crockdur.init("Crokdur", "mâtin de Naples", 75);

// Création et initialisation du deuxième chien
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);

// Création et initialisation du troisième chien
var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

// Tableau contenant tous les chenil
var chenil = [];
chenil.push(crockdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");

// Parcours du chenil et affichage de leur description et leur aboiement
chenil.forEach(function (chien) {
    console.log(chien.decrire() + " Il aboie : " + chien.aboyer());
});