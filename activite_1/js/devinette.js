/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// Nombre d'essais de l'utilisateur
var nombreDeSaisie = 1;
// Nombre saisi par l'utilisateur
var nombre;
// Nombre limite d'essais
var nombreMaxEssais = 6

while (nombreDeSaisie <= nombreMaxEssais) {
    
    // Demande de saisi d'un nombre
    nombre = Number(prompt("Saissez un nombre entre 1 et 100 :"));
    
    if (nombre < solution) {
        // Le nombre saisi est plus petit que la solution
        console.log(nombre+" est trop petit");
    } else if (nombre > solution) {
        // Le nombre saisi est plus grand que la solution
        console.log(nombre+" est trop grand");
    } else if (nombre === solution){
        // Le nombre saisi est égal à la solution, on sort de la boucle
        console.log("Bravo la solution était "+solution);
        console.log("Vous avez trouvé en "+nombreDeSaisie+" essai(s)")
        break;
    }
    
    nombreDeSaisie++;
}

// Si l'utilisateur n'a pas trouvé le résultat en un nombre limite d'essais, message d'erreur
if (nombreDeSaisie > nombreMaxEssais) {
    console.log("Perdu... La solution était "+solution);    
}