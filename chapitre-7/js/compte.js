/*
Exercice : compte bancaire
*/

var compte = {
    titulaire: "Alex",
    solde: 0,
    crediter: function(valeur) {
        this.solde += valeur;
    },
    debiter: function(valeur) {
        this.solde -= valeur;
    },
    decrire: function() {
        var description = "Titulaire " +this.titulaire+ ", solde : " +this.solde+ " euros";
        return description;
    }
};

// Description du compte
console.log(compte.decrire());

// Crédit de 200 euros
compte.crediter(200);

// Débit de 150 euros
compte.debiter(150);

// Description du compte, doit afficher 50 euros
console.log(compte.decrire());