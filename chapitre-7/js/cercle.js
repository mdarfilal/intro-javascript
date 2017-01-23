/*
Exercice : objet cercle
*/

var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
    rayon: r,
    // Retourne le perimetre du rayon
    perimetre: function() {
        return 2 * Math.PI * this.rayon;
  },
    // Retourne l'aire du cercle
    aire: function() {
        return Math.PI * this.rayon * this.rayon;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());