// les sélecteurs

//document.querySelector('h4').style.background = "yellow";

// const baliseHTML = document.querySelector("H4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click', () => {
    response.classList.add("show-response");
    response.style.background = "green";
})

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
})

// ordre de priorité : DIV > #ID > .class > baliseHTML

//______________________________________________________

// Mouse Events (événement de la souris)

const mousemove = document.querySelector(".mousemove");

window.addEventListener('mousemove', (e) => { // e = event (événements) récupère toutes les data (les données)
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";    
});

window.addEventListener("mousedow", () => {
mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid purple";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink"; //permet de changer la couleur avec le suvol de la souris sur le container//
})

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)"; //permet d'incliner, de faire une rotation de 2° de la réponse en la survolant avec la souris//
});

//___________________________________________________________

//keyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

 /*ajouter du son*/
// const ring = (key) => {
//     const audio = new Audio();
//     audio.src = key + ".mp3";
//     audio.play();
// };

document.addEventListener("keypress", (e) => { /*permet de créer un événement dès que l'on presse une touche*/
    key.textContent = e.key; /*affiche la lettre que l'on frappe*/
if (e.key === "j") { /*on lui demande de changer de couleur quand une lettre bien précise est donner sinon de changer d'une autre couleur si ce n'est pas la bonne lettre*/
    keypressContainer.style.background = "pink";
} else if (e.key === "h"){
    keypressContainer.style.background = "teal";
} else {
    keypressContainer.style.background = "red";
}

if (e.key === "Enter") ring(e.key);
});

//______________________________________________________________________________
// scroll Event (scroller : défilement)

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
   if (window.scrollY > 120) {
        nav.style.top = 0;
   } else {
    nav.style.top = "-50px";
   }
});

//______________________________________________________________________________________________________
// Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) =>{
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefaut(); //annule le changement de page

if (cgv.checked){ //si on met une croix pour accepter les cgv on valide et ça Affiche le contenu des variables
document.querySelector("form > div").innerHTML = `
<h3>Pseudo : ${pseudo}</h3>
<h4>Langage préféré : ${language}</h4>
`;
} else { //sinon le message d'alerte s'affiche
    alert("Veuillez accepter les cgv");
}
});

//___________________________________________________

// load event
window.addEventListener("load", ()=> {
    console.log("document chargé");
});

//___________________________________________________

// ForEach : pour chacun (donnera la même fonction pour chaque éléments)
// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

//______________________________________________________________

// addEventlistener VS onclick

// document.body.onclick = () => {
//     console.log("click !");
// };

//Usecapture (se déclenche immédiatement : en premier)
document.body.addEventListener('click', () => {
    console.log("click 2");
}), true;

//Bubbling : fin : (leventlistener est paramétré en mode Bubbling)
document.body.addEventListener("click", () => {
    console.log("click 1 !");
}), false;

//__________________________________________________________________

//Stop propagation

// questionContainer.addEventListener("click", (e) => {
//     alert("test !");
//     e.stopPropagation();
// });

// removeEventlistener

//___________________________________________________________________

// BOM : Browser Object Model (model d'objet de navigateur)

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "cours js", "height=600, width=800");

// window.close() = pour fermer la fenêtre popup dans la console

// Evénements adossés à Window
//alert("helle !");

// // confirm
// btn2.addEventListener('click', () => {
//     confirm("Voulez-vous vraiment vous tromper ?");
// });

// prompt
btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom !");

    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

// //Timer, compte à rebours
// setTimeout(() => {
//     //logique à exécuter
//     questionContainer.style.borderRadius = "300px";
// }, 2000);

// let interval = setInterval(() => {
//     document.body.innerHTML += `<div class='box'><h2>Nouvelle boite !</h2></div>`;
// }, 1000);

// document.body.addEventListener("click", () => {
//     clearInterval(interval);
// });

// Location
//console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
//console.replace("http://zooplus.fr");

// window.onload = () => {
//     location.href = "http://twitter.fr";
// };

// Navigator
//console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition (docs pour obtenir des codes de localisation)


// History

//console.log(history);
//window.history.back();
//history.go(-6);

//____________________________________________________________________

// SetProperty
window.addEventListener("mousemove", (e) => {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");
});



