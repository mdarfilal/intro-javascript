// TODO : ajoutez ici la définition des objets nécessaires

// Création du prototype Compte
var Compte = {
    init: function (titulaire, solde, taux) {
        this.titulaire = titulaire;
        this.solde = solde;
        this.taux = taux;
    },
    debiter: function (montant) {
        this.solde -= montant;
    },
    crediter: function (montant) {
        this.solde += montant;
    },
    ajouterInterets: function() {
        this.solde += this.solde * this.taux
    },
    decrire: function () {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
}

// Création de l'objet CompteBancaire avec un prototype Compte
var CompteBancaire = Object.create(Compte);
CompteBancaire.initCB = function (titulaire, solde) {
    this.init(titulaire, solde);
};

// Création de l'objet CompteEpargne avec un prototype Compte
var CompteEpargne = Object.create(Compte);
CompteEpargne.initCE = function (titulaire, solde, taux) {
    this.init(titulaire, solde, taux);
};

/*
VERSION DU CORRECTEUR

var CompteBancaire = {
    // Initialise le compte bancaire
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};
// Calcule et ajoute les intérêts au solde cu compte
CompteEpargne.ajouterInterets = function () {
    var interets = this.solde * this.tauxInteret;
    this.solde += interets;
};

*/

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());