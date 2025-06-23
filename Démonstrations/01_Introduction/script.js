// Affichage en console
console.log("Exécution dans un autre fichier.");

/*
  Récupération d'un élément HTML sur la page
  Affichage en console de l'élément
*/
const title1 = document.getElementById("title1");
console.log("title1: ", title1);

// Fonction de Déboggage
console.warn("Ceci est un message d'avertissement.");
console.error("Ceci est un message d'erreur.");
// console.clear();
console.log(title1);
console.dir(title1);
console.time();
setTimeout(() => {
  console.timeEnd();
}, 1000);