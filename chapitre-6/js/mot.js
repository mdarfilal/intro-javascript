/*
 Exercice : analyse d'un mot
*/

// Saisie utilisateur
var motSaisi = prompt("Saisissez un mot : ");

console.log("Le mot "+motSaisi+" contient "+motSaisi.length+" charactère(s)"); 
console.log("Il s'écrit en minuscules "+motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules "+motSaisi.toUpperCase());

// Nb voyelles et consonnes
var nbVoyelles = compterNbVoyelles(motSaisi);
var nbConsonnes = motSaisi.length - nbVoyelles;
console.log("Il contient "+nbVoyelles+" voyelle(s) et "+nbConsonnes+" consonne(s)");

// Inverse
var motInverse = inverser(motSaisi);
console.log("Il s'écrit à l'envers "+motInverse);

// Palindrome
if (motSaisi.toLowerCase() === motInverse.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}

// Convesion en Leet Speak
var motLeetSpeak = convertirEnLeetSpeak(motSaisi);
console.log("Il s'écrit en leet speak "+motLeetSpeak);

/*
* Renvoie le nombre de voyelles d'un mot
*/
function compterNbVoyelles(mot) {
    var nombreVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        if (mot[i].toLowerCase() === "a" || mot[i].toLowerCase() === "e" || mot[i].toLowerCase() === "i" || 
            mot[i].toLowerCase() === "o" || mot[i].toLowerCase() === "u" || mot[i].toLowerCase() === "y") {
            nombreVoyelles++;
        }
    }
    return nombreVoyelles;
}

/*
* Renvoie l'inverse d'un mot
*/
function inverser(mot) {
    var motInverse = "";
    
    for (var i = mot.length-1; i >= 0; i--) {
        motInverse += mot[i];
    }
    
    return motInverse;
}

/*
* Converti un mot en leet speak
*/
function convertirEnLeetSpeak(mot) {
    var motLeetSpeak = "";
    
    for (var i = 0; i < mot.length; i++) {
        motLeetSpeak += trouverLettreLeet(mot[i]);
    }   
    return motLeetSpeak;
}

/*
* Trouve la lettre leet speak correspondante
*/
function trouverLettreLeet(lettre) {
    var lettreLeetSpeak;
    
    switch (lettre.toLowerCase()) {
            case "a":
               lettreLeetSpeak = "4";
                break;
            
            case "b":
               lettreLeetSpeak = "8";
                break;
                
            case "e":
               lettreLeetSpeak = "3";
                break;
                
            case "l":
               lettreLeetSpeak = "1";
                break;
                
            case "o":
               lettreLeetSpeak = "0";
                break;
                
            case "s":
               lettreLeetSpeak = "5";
                break;
                
            default :
                lettreLeetSpeak = lettre;
                break;
        }
    return lettreLeetSpeak;
}