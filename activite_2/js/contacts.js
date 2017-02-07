/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contact = {
    nom: "",
    prenom: "",
    init: function (nom, prenom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    decrire: function () {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    }
};

// Liste des contacts
var contacts = [];

// Valeurs des saisies
var saisie = "";
var listerContactChoix = "1";
var ajouterContactChoix = "2";
var exitChoix = "0";

// Composantes du menu
var menuBienvenue = "Bienvenue dans le gestionnaire des contacts !";
var menuListerContact = listerContactChoix + " : Lister les contacts";
var menuAjouterContact = ajouterContactChoix + " : Ajouter un contact";
var menuExit = exitChoix + " : Quitter";
var menu = menuBienvenue + "\n" + menuListerContact + "\n" + menuAjouterContact + "\n" + menuExit;

// Initialisation de la liste des contacts
creerContact("Lévisse", "Carole");
creerContact("Neslonnes", "Mélodie");

// Boucle de lecture de la saisie de l'utilisateur
while (saisie !== exitChoix) {
    console.log(menu);
    saisie = prompt("Choisissez une action");
    
    switch (saisie) {
        case listerContactChoix :
            listerContact();
            break;
            
        case ajouterContactChoix :
            ajouterContact();
            break;
        
        case exitChoix :
            console.log("Au revoir !");
            break;
            
        default :
            console.error("Numéro incorrect");
            break;
    }
}

/**
* Permet de lister tous les contacts
**/
function listerContact() {
    console.log("Voici la liste de tous les contacts :");
    contacts.forEach(function (contact) {
        console.log(contact.decrire());
    });
}

/**
* Permet de demander la saisie du nom et prenom du contact à créer
**/
function ajouterContact() {
    // Récupération du nom et prénom du contact à ajouter
    var nom = prompt("Saisissez le nom du contact");
    var prenom = prompt("Saisissez le prenom du contact");
    
    // Création de l'utilisateur
    creerContact(nom, prenom);
    
    console.log("Le nouveau contact a été ajouté");
}

/**
* Permet de créer un contact
* @nom : nom du contact à créer
* @prenom : prenom du contact à créer
**/
function creerContact(nom, prenom) {
    // Création du nouveau contact
    var contact = Object.create(Contact);
    contact.init(nom, prenom);
    
    // Ajout du nouveau contact dans la liste des contacts
    contacts.push(contact);
}