//les Variables : var, let

// var unTexte = "Bonjour à tous"; //on crée une variable "unTexte" et on lui dit d'y mettre "Bonjour à tous"
// console.log(unTexte);
// unTexte = "Bonsoir à tous";  //on demande à la variable "unTexte" de remplacer par "Bonsoir à tous"
// console.log(unTexte); //le console.log permet d'afficher dans la console

// const prenom = "Robert"; //on crée une constante prenom qui est Robert
// prenom = "Albert"; //on demande de changer la constante prenom en Albert
// console.log(prenom); //on lui demande d'afficher mais impossible car une constante ne peut être changée.

// let unChiffre = 12; //let est une variable qui peut être changé
// unChiffre = 50; //on demande à la variable de changer 12 en 50
// console.log(unChiffre);

// let chaine = "voici une chaine de caractères"; //chaine de caractères
// let nouvelleChaine = `chaine précédente : ${chaine} ou même des nombres`; //concatenation : c'est assembler plusieurs éléments entre les baktits `` (touches Alt GR + 7), on ajoute "$" ouvrir les {la variable let} : plus besoin des + et des ""
// console.log(nouvelleChaine);

// let nombres = "25";
// let nouveauNombres = `il fait ${nombres} degrès à l'ombre`;
// console.log(nouveauNombres);

// let verbe = "manger";
// let conjuguerVerbe =`Les enfants vont finir de ${verbe} le gâteau` ;
// console.log(conjuguerVerbe);

// var nombres = "20";
// var additionNombres = `50 + ${nombres} = 70`;
// console.log(additionNombres);

// let nom = "Dupont";
// let prenom = `Je m'appel Julien ${nom} et j'ai 22 ans`;
// console.log(prenom);

// let string = "je suis une chaine"; //string = chaine de caractaires
// let number = "20";
// let boolean = true; //booléen = renvoi à true (vrai) ou false (faux)
// let array = ["je", "suis", 20, false]; //array = tableau : instruction entre []

// let objet = {
//     prenom: "Marc",
//     age: 20,
//     ville: "Maubeuge",
// };
// console.log(objet); // affiche "objet" dans la console : RESULTAT : {prenom: 'Marc', age: 20, ville: 'Maubeuge'}

//console.log(10 - 6); // opérateur qui permet d'exécuter des opérations dans la console
//console.log(10 * 6.157);
//console.log(56 + 27);
//console.log(100 / 25);
//console.log(3 ** 5); // ** = exposant/puisssance

// let total = 2; //opérateur d'affectation
// total++;   // incrémentation "++" signifie +1 ou "--" -1 derrière ou devant
// console.log(total);

// let total = 6;
// total++ //ajoute 1
// console.log(total);

// let total = 9;
// total--; //retire 1
// console.log(total);

// let total = 4;
// total +=3; //pour ajouter plus que "1" on met += et le chiffre ex.:3. de même pour "-" ou "*" ou "/"
// console.log(total);

// let total = 5;
// total-=2;
// console.log(total);

// let total = 6;
// total*=2;
// console.log(total);

// let total = 12;
// total /=2;
// console.log(total);

// let x = 2;
// let y = 5;
// if (x < y) { // if=si
// console.log("x est inférieur à y");
// } else { // else=sinon
// console.log("x est supérieur à y");
// }

// let x = 8;
// let y = 7;
// if (x === y) { // le "===" vérifie le type et la valeur
//     console.log("True !");
// } else {
//     console.log("false !");
// }

// let x = 10;
// let y = 12;
// if (x !== y) { // "!==" est différent de
//     console.log("True !");
// } else {
//     console.log("False !");
// }

// let x = 12;
// let y = 20;
// if (x === y || x > 25) { // les "||" = ou
//     console.log("True !");
// } else {
//     console.log("False !");
// 

// let x = 25;
// let y = 25;
// if (x === y && x < 26) {  // "&&" = et
//     console.log("True !");
// } else {
//     console.log("False !");
// }

// let x = 20;
// let y = 25;
// if(x === y) {
//     console.log("True !");
// } else if (x == y) {
//     console.log("x et y égaux en valeur");
// } else {
//     //console.log("x et y ne sont pas du tout égaux");
//     console.log(`${x} et ${y} ne sont pas du tout égaux`); // on peut concaténer pour avoir le résultat en affichant les valeurs
// }

// let x = 16;
// let y = 65;
// if (x >= y) {
//    // console.log("True");
//    console.log(`${x} est plus grand que ${y} et ne sont pas égaux`)
// } 
// else if (x <= y) 
// // {
// //    // console.log("False");
// // } else
// {
//     console.log(`${x} n'est pas plus grand que ${y} et ne sont pas égaux`);
// }


//les Fonctions : function()

// function JeVoyage() { // on déclare la fonction
//     console.log("je prend l'avion");
//     console.log("à destination de Tahiti");
// }
// JeVoyage(); // on appelle la fonction pour qu'elle s'affiche


// autre façon de déclarer une fonction avec la fonction flêché

// const faireUneTache = (tache) => {
// console.log("je fais : " + tache);
// }
// faireUneTache('les courses');
// faireUneTache('le ménage');

// function calc(x, y) {
//    return x + y; // return permet de retourner une valeur dans la console
// }
// calc(4, 9);

// Fonction anonyme

// (()=> {
//     console.log("je me joue toute seule");
// })();

// function add2() {
//     let a = 7;
//     console.log(a); // affichera dans la console la valeur de a  soit 7
//     return a + 2; // dans la console on pourra calculer a + un chiffre ou nombre et nous donnera le résultat
// }
// add2();


// Excercice : calculatrice

let total = 1;

function addition(x) {
    total += x;
    return total;
}

function soustraction(x){
    total -= x;
    return total;
}

function multiplication(x){
   if (total === 0) {
    return (total = x);
   } else {
    total *= x;
    return total;
}
}

function division(x){
    if (total === 0) {
    return (total = x);
} else {
    total /= x;
    return total;
}
}

function reset(){
    total = 0;
}

