////LES VARIABLES////
const affichage = document.querySelector("#ecran");
const touches = [...document.querySelectorAll(".bouton")];
const listeKey = touches.map(touche => touche.dataset.key);


////LES ECOUTEUR////
document.addEventListener("click", function(event){
    const valeur = event.target.dataset.key;
    calculer(valeur);
});

window.addEventListener("error", function(event){
    alert(`Une erreur est survenu sur votre calcule: "${event.message}"`)
});


////LES FONCTIONS////
function calculer(valeur) {
    switch (valeur) {
        case "8":
            affichage.textContent = "";
            break;
        case "13":
            const calcul = eval(affichage.textContent);
            affichage.textContent = calcul;
            break;
        default:
            const indexkeyCode = listeKey.indexOf(valeur);
            const touche = touches[indexkeyCode];
            affichage.textContent += touche.innerHTML;
    }
}



